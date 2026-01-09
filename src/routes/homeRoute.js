const express = require('express') 
const app = express() 
const homeController = require('./controllers/homeController.js')

app.use(express.json())


app.get('/home', homeController.getHomeContent) 

app.post('/home')

