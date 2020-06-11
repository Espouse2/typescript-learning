const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map((pizza, index) => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getName: function() { console.log(pizza.name);
},
};

console.log(pizza.getName());