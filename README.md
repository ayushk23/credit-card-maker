# Credit Card Form - A React App

Sample Prototype:  https://imgur.com/7qCCZKv


Demo: https://codesandbox.io/s/credit-card-maker-forked-zvlgb

## How do I run it?

In the project directory, you can open cmd and type the below command to run:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## What does the app do?

This is a react app of a prototype of a credit card form which renders a credit card based on the input provided by the user in the form.
You can run the app on your local or the codesandbox and play around with it to explore more.
It is designed to be used as a plug-and-play for an existing payment gateway in some application.

## What are its features?

This app has the following features:
- Card type detection for the following 16 digit cards types with 16 digit card number:
  * Mastercard
  * RuPay
  * Visa
  * Maestro
- Also supports **American Express** that has 15 digit card number.
- Dynamic card number grouping into `4,4,4,4` for 16 digit cards and `4,6,5` for 15 digit Amex(American Express) cards.
- Masking of inputs on the card.
- Some cool animations - Active Section box that smnoothly tarnsitions on the focussed input's rendered section and card rotation.

## How to implement dynamic card grouping?

The card grouping is done in a single element as a string and not broken down into multiple elements.
To achieve that, it has 2 different regex in place that formats the numbers based on the card type - 4x4 OR 4-6-5.

The implementation can be found in `CardForm.js`.

```
    if(cardType === 'amex'){
        //split with the help of 3 groups
        let cardNumber = (num.slice(0,4).replace(/(.{4})/g, '$1 ') + 
            num.slice(4,10).replace(/(.{6})/g, '$1 ') +
            num.slice(10,15)).trim();
        setNumber(cardNumber);  //updating the state
    }
    else{
        // for 4x4 
        setNumber(num.replace(/(.{4})/g, '$1 ').trim()); //we do trim to remove thge trailing whitespace with '$1 '
    }
```

$n represents the nth capture group of the regular expression when using replace with regex.
In this case, lets breakdown `num.replace(/(.{4})/g, '$1 ')` to undcerstand more clearly.

* `/(.{4})/g` is a regular expression(regex) which splits your input into group of 4 characters.
* `.` matches any input.
* `{4}` marks the grouping of 4 inputs.
* `g` is a global flag that  indicates that the regular expression should be tested against all possible matches in a string.

* `$1` is a placeholder for the groups we get out of the regex amtching. In this case, it helps us replace each group with a trailing whitespace. `'$ '` 
[Read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) about the $n regex placeholder.


##### Saw something which can be improved or is a bug? 
Point it out with an issue