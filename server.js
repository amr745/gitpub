const express = require ('express');
const  app = express ();
const PORT = process.env.PORT || 3001;
const drinks = require('./models/drinks.js')
const food = require('./models/food.js')

app.get("/", (req,res) => {
    res.send('Welcome to the Gitpub App!')
});

app.get("/drinks", (req,res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks,
    });
});

app.get("/drinks/:id", (req,res) => {
    res.render('drinks_show.ejs', {
       allDrinks: drinks[req.params.id]
    });
});

app.get("/food", (req,res) => {
    res.render('food_index.ejs', {
        allFood: food,
    });
});

app.get("/food/:id", (req,res) => {
    res.render('food_show.ejs', {
       allFood: food[req.params.id]
    });
});

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`)
});