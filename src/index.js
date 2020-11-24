import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const firstname = "Rushi";
const tosdate = new Date().toLocaleDateString();
const totime = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
    <body>
        <h1>Hello, My name is {firstname} </h1>
        <p>Todays date is = {tosdate}</p>
        <p>And the time is = {totime}</p>
      </body>
    </>
  ,document.getElementById('root')
);