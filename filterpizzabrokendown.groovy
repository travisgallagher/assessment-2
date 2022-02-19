filter pizza
function name = filterByProperty

conditions: {
    above or below certain rating
    above or below certain price
    above or below certain popularity
}

params: {
    property: "rating" | "popularity" | "price"
    number: number
    type: "above" | "below"
}

logic: {
    if(above) return above given number
    if(below) return below give number
}

return: {
    the new array that is true to our logic
}


const pizza1 = {
    name: `Gluten-Free`, 
    price: 15.99, 
    category: `Create your own`, 
    popularity: 2, 
    rating: 1, 
    tags: [`GF`, `Kids`, `Tastes like cardboard`]
};

{name: `Gluten-Free`, price: 15.99, category: `Create your own`, popularity: 2, rating: 1, tags: [`GF`, `Kids`, `Tastes like cardboard`]};
{name:`Pepperoni`, price: 8.99, category:`Large pizza`, popularity: 5, rating: 4, tags: [`Favorites`, `Kids`, `Everyone loves`]};
{name:`Cheese`, price: 7.99, category:`Large`, popularity: 3, rating: 4, tags: [`Favorites`, `Basic`, `Plain`]}; 
{name:`Hawaiian `, price: 14.99, category:`Specialty`, popularity: 4, rating: 5, tags: [`Pineapples`, `Meat`]}; 
{name:`Vegan`, price: 15.99, category:`Create your own`, popularity: 1, rating: 1, tags: [`Vegan`, `Gross`, `Why`]};
