//const express = require('express');
import express from 'express';

const server = express();
var port = 3722;

server.get("/",(req,res) => {
    res.send("Server is ready");
});

server.listen(port,()=>{
    console.log("Server is online at https://localhost:" + port);
});