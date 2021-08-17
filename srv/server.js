const express = require('express');
const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');
const checkReadScope = require('./util/middlewares/auth');
const app = express();
const environment = process.env.NODE_ENV || "development";

if(environment === "development"){
    xsenv.loadEnv();
}

passport.use(new JWTStrategy(xsenv.getServices({xsuaa:{tag:'xsuaa'}}).xsuaa));
app.use(express.json())
app.use(passport.initialize());
app.use(passport.authenticate('JWT', {session: false}));


app.get("/api/users", (req,res)=>{
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

    res.send(user);
});

const port = process.env.PORT || 4004;

app.listen(port, ()=>{
    console.log("app is listening on http://localhost:4004");
});