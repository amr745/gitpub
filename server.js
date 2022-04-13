const express = require ('express');
const  app = express ();
const PORT = process.env.PORT || 3001;
const drinks = require('./models/drinks.js');
// let titleCaseDrinks = drinks.indexOf(charAt(0).toUpperCase() + drinks.slice(1));
// const uppercased = drinks.map(drink => drink.toString().toUpperCase());


app.get("/", (req,res) => {
    res.send('Welcome to the Gitpub App!')
});


app.get("/drinks", (req,res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks,
    });
});

app.get("/drinks/:id", (req,res) => {
    res.send(req.params.id)
});


    // let allDrinks = drinks.toUpperCase
    // allDrinks.toUpperCase()
    // const allDrinks = drinks.charAt(0).toUpperCase() + drinks.slice(1);
    // let titleCaseDrinks = drinks.map(val => val[0].toUpperCase() + val.slice(1));
    // const allDrinks = drinks.toUpperCase


    // const allDrinks = drinks.charAt(0).toUpperCase() + drinks.slice(1);
    // drinks[i].charAt(0).toUpperCase()
// });

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`)
});