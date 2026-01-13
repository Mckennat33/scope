const express = require('express') 
const app = express()



const getHomeContent = (req, res) => {
    //home data
    res.json( [{
            name: 'Thomas', 
            age: 34
        }])
    const {email, password } = req.body
}



module.exports = {
    homeController
}