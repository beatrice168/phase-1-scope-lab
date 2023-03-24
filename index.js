// Write your solution in this file!
var customerName=  'bob';
const leastFavoriteCustomer = "Aron"
 customerName ();
function upperCaseCustomerName(){
   return customerName.toUpperCase(`BOB`);
}
upperCaseCustomerName();
function setBestCustomer(){
 return ('not bob');
}
// Declare a variable in global scope called customerName using the var keyword.
var customerName = "John Doe";

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = "not bob";
}

// See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
// Write a function called changeLeastFavoriteCustomer() that changes the value of the global variable called changeLeastFavoriteCustomer.
function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = "Jane";
 }
   changeLeastFavoriteCustomer();