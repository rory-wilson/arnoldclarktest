## Arnold Clark Test Application
Written to meet the following requirements:

Arnold Clark wants to introduce a new interest free car loan.

* Create a web application that will allow one of our Product Consultants to produce a
payment schedule for the new loan scheme.
* The application should allow the Product Consultant to input a vehicle price, deposit
amount, delivery date and select from 1, 2 or 3 year finance options.
* There is a minimum 15% deposit.
* For the first month add an £88 arrangement fee, the last a £20 completion fee. These values
should be easily configurable.
* Payments are due on the first Monday of each month, beginning the month after delivery.
* The completed application should calculate and display a quote showing a summary of the
loan and a payment schedule showing monthly payments with date and amount due.
* Using this API display the top six vehicles which may be affordable based on the monthly
payments
https://www.arnoldclark.com/used-
cars/search.json?payment_type=monthly&amp;min_price=100&amp;max_price=150&amp;sort_order=mo
nthly_payment_up
This will return a JSON response. We&#39;re most interested in the `searchResults` array.
* Your code should reflect clean coding principles and contain tests.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

