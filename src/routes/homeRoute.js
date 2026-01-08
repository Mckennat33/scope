const express = require('express') 
const app = express() 
app.use(express.json())


app.get('/home', homeController.getHomeContent) 

app.post()