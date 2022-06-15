const {Given, When, Then}  = require('@cucumber/cucumber');
const {expect} = require('chai')

// data
let sum = 0;
let difference = 0;
let product = 0;
let division = 0;

Given('{int} and {int}', function (int1, int2) {
 
});

// adding
When('adding {int} and {int}', function (int1, int2) {
   sum = int1 + int2;
});
Then('the sum should be {int}', function (result) {
  expect(result).to.equal(sum);
});

// subtracting
When('subtracting {int} and {int}', function (int1, int2) {
  difference = int1 - int2;
});

Then('the difference should be {int}', function (result) {
  expect(result).to.equal(difference);
});

// multiply
When('Multiplying {int} and {int}', function (int1, int2) {
  product = int1 * int2;
});

Then('the product should be {int}', function (result) {
  expect(result).to.equal(product)
});

// divide
When('dividing {int} and {int}', function (int1, int2) {
  division = int1 / int2;
});
Then('the division should be {float}', function (result) {
  expect(result).to.equal(division)
});