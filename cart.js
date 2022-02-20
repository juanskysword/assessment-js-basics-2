///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
let summedPrice = cart.reduce(function (cost, total) {
    return cost + total.price;
}, 0);
    console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice (summedPrice, couponValue, tax) {
    console.log((summedPrice * tax) - couponValue)
     }

calcFinalPrice(26.97,.3,1.86)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    
*/
// let {'Kate',2156859666 , 7854, 12} = customers
// let {name, phone, id_card, visits} = customers
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    'name': 'customerName',
    'phone': 'PhoneNumber',
    'id_card': 'customerId',
    'visit': 'VisitsFromCustomer',
};


let customers = {
    name: 'Kate',
    phone: 2156859666,
    id_card: 7854,
    visits: 12
}

console.log(customers)