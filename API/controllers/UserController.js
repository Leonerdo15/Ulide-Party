const client = require('../connection.js')
const express = require('express');
const app = express();

const connectionString = process.env.CONNECTION || 5000

app.listen(connectionString, ()=>{
    console.log("Sever is now listening at port 5000");
})

client.connect();

app.get('/', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
