import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Popup from './Popup';
import reportWebVitals from './reportWebVitals';

//const express = require("express");

//const app = express();

/*app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "synopsis123@",
    database: "playgroung",
    });*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();



/*app.post('/register',(req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO [USER].[LOG] (username, password)" +
        "values (?,?)", [username, password],(err, result) => {
        console.log(err);
    });
})

app.post('/login',(req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * [USER].[LOG] WHERE username = ? AND password = ?",
        [username, password],(err, result) => {
        if(err) {
            res.send({err: err});
        }
            if(result.length > 0 ){
                res.send(result);
            }else{
                res.send({message: "Wrong credentials"});
            }

    });
})*/

