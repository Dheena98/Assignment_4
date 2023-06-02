const express = require('express')
const app = express()
const bodyParser = require("body-parser");

const port = 3000

app.use(express.urlencoded());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.post('/add', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if (typeof num1 === "string" || typeof num2 === "string") {
        res.send({
            "status": "error",
            "message": "Invalid data types"
        });
        return;
    }

    const sum = num1 + num2;
    if (sum < -1000000) {
        res.send({
            "status": "error",
            "message": "Underflow"
        });
        return;
    }

    if (sum > 1000000) {
        res.send({
            "status": "error",
            "message": "Overflow"
        });
        return;
    }

    res.send({
        "status": "success",
        "message": "The sum of given two numbers",
        "sum": sum
    });
});

app.post('/sub', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if (typeof num1 === "string" || typeof num2 === "string") {
        res.send({
            "status": "error",
            "message": "Invalid data types"
        });
        return;
    }

    const diff = num1 - num2;
    if (diff < -1000000) {
        res.send({
            "status": "error",
            "message": "Underflow"
        });
        return;
    }

    if (diff > 1000000) {
        res.send({
            "status": "error",
            "message": "Overflow"
        });
        return;
    }

    res.send({
        "status": "success",
        "message": "The difference of given two numbers",
        "difference": diff
    });
});

app.post('/multiply', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if (typeof num1 === "string" || typeof num2 === "string") {
        res.send({
            "status": "error",
            "message": "Invalid data types"
        });
        return;
    }

    const result = num1 * num2;
    if (result < -1000000) {
        res.send({
            "status": "error",
            "message": "Underflow"
        });
        return;
    }

    if (result > 1000000) {
        res.send({
            "status": "error",
            "message": "Overflow"
        });
        return;
    }

    res.send({
        "status": "success",
        "message": "The product of given numbers",
        "result": result
    });
});

app.post('/divide', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if (typeof num1 === "string" || typeof num2 === "string") {
        res.send({
            "status": "error",
            "message": "Invalid data types"
        });
        return;
    }

    if (num2 === 0) {
        res.send({
            "status": "error",
            "message": "Cannot divide by zero"
        });
        return;
    }
    
    const result = num1 / num2;
    if (result < -1000000) {
        res.send({
            "status": "error",
            "message": "Underflow"
        });
        return;
    }
    
    if (result > 1000000) {
        res.send({
            "status": "error",
            "message": "Overflow"
        });
        return;
    }
    
    res.send({
        "status": "success",
        "message": "The division of given numbers",
        "result": result
    });
});
    

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;