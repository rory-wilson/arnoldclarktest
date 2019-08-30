
import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './summary';

it('renders an empty value without crashing', () => {
  const div = document.createElement('div');

  const values = {};

  ReactDOM.render(<Summary values={values} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders summary and schedule', () => {
  const div = document.createElement('div');

  const values = {
    summary: {
      price: 3000,
      deposit: 1000,
      monthlyPayment: 250,
      startDate: '01 Aug 2019',
      months: 12,
      endDate: '01 Aug 2020',
    },
    schedule: [{ date: '01 Aug 2019', value: '300' }],
    cars: []
  };

  ReactDOM.render(<Summary values={values} />, div);
  expect(div.querySelector('p.card-text').textContent).toBe("£250 / month for 12 months from 01 Aug 2019 to 01 Aug 2020")
  ReactDOM.unmountComponentAtNode(div);
});
