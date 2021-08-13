const express = require('express');
const app = express();

app.get("/api/users",(req,res)=>{
    const user = [
        {
            name: "Johan Stiven",
            lastname: "Gaitan Peñuela",
            age: 19
        },
        {
            name: "Miguel Angel",
            lastname: "Gaitan Peñuela",
            age: 12
        },
        {
            name: "Yeimy Viviana",
            lastname: "Peñuela Ramirez",
            age: 36
        }
    ];

    res.json(user).send();
});

app.listen(4004, ()=>{
    console.log("app is listening on http://localhost:4004");
});