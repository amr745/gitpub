const express = require ('express');
const  app = express ();
const PORT = process.env.PORT || 3001
const drinks = require('./models/drinks.js')

app.get("/", (req,res) => {
    res.send('Welcome to the Gitpub App!')
});

app.get("/drinks", (req,res) => {
    res.render('drinks_index.ejs')
});

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`)
});