const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Veda ")
})
app.post("/login", (req, res) => {
    const _info = req.body;
    console.log(_info);
    res.status(200).send("Login Success");

})


app.listen(process.env.PORT||3001, () => {
    console.log("App is running on 3001")
})