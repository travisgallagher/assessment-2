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
    name: ``, //`pepperoni
    price: 0, // 7.99
    category: ``, // `entree`
    popularity: 0, // 8
    rating: 0, // 4
    tags: [``]  // [`pepperoni`, ]
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
// console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

pizza.tags = [`Gluten-Free`, `Kids`, `Vegan`]; 

// console.log(pizza.tags[1]); 


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
// review 
// let {price} = pizza
// console.log(price)

let {price} = pizza
// console.log(price)
// let pr = pizza.price
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

pizza.category = `Create your own`

let {category} = pizza
// console.log(category)


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
const pizza1 = {name: `Gluten-Free`, price: 15.99, category: `Create your own`, popularity: 2, rating: 1, tags: [`GF`, `Kids`, `Tastes like cardboard`]};
const pizza2 = {name:`Pepperoni`, price: 8.99, category:`Large pizza`, popularity: 5, rating: 4, tags: [`Favorites`, `Kids`, `Everyone loves`]};
const pizza3 = {name:`Cheese`, price: 7.99, category:`Large`, popularity: 3, rating: 4, tags: [`Favorites`, `Basic`, `Plain`]}; 
const pizza4 = {name:`Hawaiian `, price: 14.99, category:`Specialty`, popularity: 4, rating: 5, tags: [`Pineapples`, `Meat`]}; 
const pizza5 = {name:`Vegan`, price: 15.99, category:`Create your own`, popularity: 1, rating: 1, tags: [`Vegan`, `Gross`, `Why`]};

foodArr = [pizza1, pizza2, pizza3, pizza4, pizza5]

// console.log(foodArr);

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
const filterByTags = (query) => {
   const newFoodArr = foodArr.filter((currentPizza) => currentPizza.tags.includes(query));
   return newFoodArr
}
// console.log(filterByTags(`Favorites`));

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a 
    certain rating, 
    below a 
    certain price, or any other combo.

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

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

// const filterByProperty = (property, number, type) => {
//    const filteredFoodArr = foodArr.filter((currentPizza) => {
//         if(property === "price") {
//             if(type === "above") {
//                 return currentPizza.price >= number
//             }
//             if(type === "below") {
//                 return currentPizza.price <= number
//             }
//         }  
//         if(property === "popularity") {
//             if(type === "above") {
//                 return currentPizza.popularity >= number
//             }
//             if(type === "below") {
//                 return currentPizza.popularity <= number
//             }
//         }  
//         if(property === "rating") {
//             if(type === "above") {
//                 return currentPizza.rating >= number
//             }
//             if(type === "below") {
//                 return currentPizza.rating <= number
//             }
//         }  
       
//     })
//     return filteredFoodArr
// }

const filterByProperty = (property, number, type) => {
    const filteredFoodArr = foodArr.filter((currentPizza) => {
         if(property === "price") {
             if(type === "above") {
                 return currentPizza.price >= number
             } else {
                 return currentPizza.price <= number
             }
         } else if (property === "popularity") {
            if(type === "above") {
                return currentPizza.popularity >= number
            } else {
                return currentPizza.popularity <= number
            }
         } else {
            if(type === "above") {
                return currentPizza.rating >= number
            } else {
                return currentPizza.rating <= number
            }
         }
     })
     return filteredFoodArr
 }

/*
    Invoke the `filterByProperty` function passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty(`price`, 15, `above`))
console.log(filterByProperty(`popularity`, 3, `below`))





