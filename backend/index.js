import fetch from 'node-fetch'
import express from 'express'
import cors from 'cors'
// import Data from "./produtos.json" assert { type: "json" }

const app = express()

app.listen(3001)

app.use(cors({
    origin: '*'
}));

app.get('/', async (req, res) =>
    res.send('<h1 style="color: blue">CRIANDO UM SERVIDOR COM EXPRESS.JS</h1>')
);

app.get('/fruits', (req, res) => {
    // res.send(Data)
    fetch('https://www.fruityvice.com/api/fruit/all')
        .then(response => response.json())
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.error('Failed retrieving information', err);
        });
});

