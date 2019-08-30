import moment from 'moment';
import BuildSummary from './actions';

const mockFetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
    resolve({
        status: 200,
        json: function () {
            return {
                searchResults: [
                    { title: { name: 'foo 1' } },
                    { title: { name: 'foo 2' } },
                    { title: { name: 'foo 3' } },
                    { title: { name: 'foo 4' } },
                    { title: { name: 'foo 5' } },
                    { title: { name: 'foo 6' } },
                    { title: { name: 'foo 7' } }
                ]
            }
        }
    });
}));

beforeEach(function () {
    global.fetch = mockFetch
});

afterEach(function () {
    mockFetch.mockClear();
});

it('returns the correct summary', async () => {
    const form = {
        financeOptions: 12,
        deliveryDate: '2019-08-01',
        depositAmount: 1000,
        vehiclePrice: 3000
    }
    const response = await BuildSummary(form)
    expect(response.summary.price).toBe(3000);
    expect(response.summary.deposit).toBe(1000);
    expect(response.summary.monthlyPayment).toBe(166.67);
    expect(response.summary.startDate).toBe("2nd Sep 2019");
    expect(response.summary.months).toBe(12);
    expect(response.summary.endDate).toBe("7th Sep 2020");
});

it('calculates a payment schedule', async () => {
    const form = {
        financeOptions: 24,
        deliveryDate: '2019-08-01',
        depositAmount: 1000,
        vehiclePrice: 3000
    }
    const response = await BuildSummary(form)
    expect(response.schedule.length).toBe(24);
});

it('adds fees to the payment schedule', async () => {
    const form = {
        financeOptions: 24,
        deliveryDate: '2019-08-01',
        depositAmount: 1000,
        vehiclePrice: 3000
    }
    const response = await BuildSummary(form)
    expect(response.schedule[0].value).toBe("171.33");
    expect(response.schedule[23].value).toBe("103.33");
});

it('creates a payment schedule where the payments are on the first monday of the month', async () => {
    const form = {
        financeOptions: 12,
        deliveryDate: '2019-08-01',
        depositAmount: 1000,
        vehiclePrice: 3000
    }
    const response = await BuildSummary(form)
    for (let i = 0; i < response.schedule.length; i++) {
        const scheduleItem = response.schedule[i];
        expect(moment(scheduleItem.date, 'Do MMM YYYY').day()).toBe(1);
    }
});

it('calls the search api', async () => {
    const form = {
        financeOptions: 12,
        deliveryDate: '2019-08-01',
        depositAmount: 1000,
        vehiclePrice: 3000
    }
    await BuildSummary(form)
    expect(mockFetch.mock.calls.length).toBe(1);

});


it('selects the top 6 results from the search api', async () => {
    const form = {
        financeOptions: 12,
        deliveryDate: '2019-08-01',
        depositAmount: 1000,
        vehiclePrice: 3000
    }
    const response = await BuildSummary(form)
    expect(response.cars.length).toBe(6);

});