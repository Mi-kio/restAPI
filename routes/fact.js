const express = require("express");
const axios = require("axios");

let getFacts = async() => {
    let response = await axios(`https://catfact.ninja/fact`);
    return response;
}

module.exports = async(req,res) => {
    let resFact =  await getFacts();
    res.send(resFact.data.fact);
}