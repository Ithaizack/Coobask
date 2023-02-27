require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
try{
    console.log('Connected to PlanetScale!')    
    connection.end()
}catch(err){
    console.log('Error connected to PlanetScale!')
}