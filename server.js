const express = require ('express');
const  app = express ();
const PORT = process.env.PORT || 3001

app.get("/", (req,res) => {
    res.send('Welcome to the Gitpub App!')
});

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`)
});