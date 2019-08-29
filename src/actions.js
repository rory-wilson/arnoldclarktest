
import moment from 'moment';

const GetVehicles = (price) => fetch(`https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&amp;min_price=${price}&amp;max_price=${price}&amp;sort_order=monthly_payment_up`, {
    accept: "application/json"
}).then(result => result.status === 200 ? result.json : null);

const getFirstMonday = (date) => {
    let startDate = date.startOf('month').isoWeekday(8);
    if (startDate.date() === 8) {
        startDate = startDate.isoWeekday(-6)
    }
    return startDate;
}

export default async (form) => {
    const startDate = getFirstMonday(moment(form.deliveryDate).add(1, 'month'));
    const endDate = getFirstMonday(startDate.clone().add(form.financeOptions, 'month'));

    const totalPrice = form.vehiclePrice - form.depositAmount;
    const schedule = [];
    const paymentDate = startDate.clone();
    const monthlyPayment = parseFloat((totalPrice / form.financeOptions).toFixed(2));

    for (let i = 0; i < form.financeOptions; i++) {
        schedule.push({ date: getFirstMonday(paymentDate).format('Do MMM YYYY'), value: monthlyPayment });
        paymentDate.add(1, 'month');
    }

    const arrangementFee = process.env.arrangementFee || 88;
    const completionFee = process.env.completionFee || 20;

    schedule[0].value = (monthlyPayment + arrangementFee).toFixed(2);
    schedule[schedule.length - 1].value = (monthlyPayment + completionFee).toFixed(2);

    // const vehiclesSearch = await GetVehicles(monthlyPayment);
    // const cars = vehiclesSearch ? vehiclesSearch.searchResults.slice(0, 6).map(result => result.title.name) : [];

    const cars = [];

    return {
        summary: {
            price: form.vehiclePrice,
            deposit: form.depositAmount,
            monthlyPayment,
            startDate: startDate.format('Do MMM YYYY'),
            months: form.financeOptions,
            endDate: endDate.format('Do MMM YYYY')
        },
        schedule,
        cars
    }
}
