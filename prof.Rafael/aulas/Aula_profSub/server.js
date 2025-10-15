const express = require("express")
const mysql = require('mysql2')
const app = express()
const port = 3000


const connection = mysql.createConnection({
    host: "127.0.0.1",
    port:3306,
    database: "rodrigo_faro",
    user:"root",
    password:"senai"
})

connection.connect()

app.post('/cliente', async(req,res)=> {
    const {nome, endereco,email,telefone} = req.body;
    try{
        const[result] = await
        connection.query(
            'INSERT INTO CLIENTE(nome,endereco,email,telefone)VALUE(?,?,?,?)',
            [nome,endereco,email,telefone]
        )
        const [novo_cliente] = await connection.query(
            'SELECT * FROM cliente WHERW id = ?',
            [result.insertId]
        )
        res.status(201).json((novo_cliente[0]))
    }catch (deuRuim){
        console.error(deuRuim.message)
        res.status(500).json({error:"Super falha total"})
    }
})


app.get('/', (req,res) => {
    res.send("pao com epa")
} )

app.listen(port,()=> {
    console.log('api funcionando 2.0')
})