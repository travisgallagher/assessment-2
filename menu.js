///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    name: ``, 
    price: 0,
    category: ``,
    popularity: 0, 
    rating: 0,
    tags: [``]
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

// popularity we will have 5/5 be the highest like 5 stars on yelp 

pizza.popularity = 5
console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

pizza.tags = [`Gluten-Free`, `Kids`, `Vegan`]; 

console.log(pizza.tags[1]); 


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
console.log(pizza)

let {priceOff} = pizza
console.log(pizza.priceOff)

// I am confused by the question, so i created a new variable `priceOff` like if they have discounts or something. Hopefully thats right?

let {price} = pizza
console.log(pizza.price)
// If you were just looking for the value of price, here it is haha

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

pizza.category = `Create your own`

let {category} = pizza
console.log(pizza.category)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

// const pizza = {
//     name: ``, 
//     price: 0,
//     category: ``,
//     popularity: 0, 
//     rating: 0,
//     tags: [``]
// }

// let name = pizza.name()
// const pizzaCon = pizza.constructor (name, price, category, popularity, rating, tags)


// couldnt get name to work, skip it
const pizzaCon = pizza.constructor (price, category, popularity, rating, tags)

const obj1 = new pizza ({name: `Gluten-Free`, price: 15.99, category: `Create your own`, popularity: 2, rating: 1, tags: [`GF`, `Kids`, `Tastes like cardboard`]})
const obj2 = new pizza ({name:`Pepporoni`, price: 8.99, category:`Large pizza`, popularity: 5, rating: 4, tags: [`Favorites`, `Kids`, `Everyone loves`]})
const obj3 = new pizza ({name:`Cheese`, price: 7.99, category:`Large`, popularity: 3, rating: 4, tags: [`Favorites`, `Basic`, `Plain`]}) 
const obj4 = new pizza ({name:`Hawaiian `, price: 14.99, category:`Specialty`, popularity: 4, rating: 5, tags: [`Pinapples`, `Meat`]}) 
const obj5 = new pizza ({name:`Vegan`, price: 15.99, category:`Create your own`, popularity: 1, rating: 1, tags: [`Vegan`, `Gross`, `Why`]})

foodArr = [obj1, obj2, obj3, obj4, obj5]

console.log(foodArr)


// const obj1 = {
//     name: ``, 
//     price: 0,
//     category: ``,
//     popularity: 0, 
//     rating: 0,
//     tags: [``]
// }

// const obj2 = {
//     name: ``, 
//     price: 0,
//     category: ``,
//     popularity: 0, 
//     rating: 0,
//     tags: [``]
// }

// const obj3 = {
//     name: ``, 
//     price: 0,
//     category: ``,
//     popularity: 0, 
//     rating: 0,
//     tags: [``]
// }

// const obj4 = {
//     name: ``, 
//     price: 0,
//     category: ``,
//     popularity: 0, 
//     rating: 0,
//     tags: [``]
// }

// const obj5 = {
//     name: ``, 
//     price: 0,
//     category: ``,
//     popularity: 0, 
//     rating: 0,
//     tags: [``]
// }

// const foodArr = [obj1, obj2, obj3, obj4, obj5]

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

 const filteredFood = foodArr.filter(pizzaTest => {
     pizzaTest.tags.icludes(`Favorites`)
     return pizzaTest
 })
// Im getting popularity is not defined?!? Skip it, running out of time. 


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE


// REVEIW ARROW FXs AND CALLBACKS Running out of time. 

const filterByProperty = (`property`, `number`, `type`) => {
    let property = `This is the property`
    let number = 5 
    let type = ('above' || `below`) 

    filArr = []; 
    filArr
}




/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

filteredByProperty( )
