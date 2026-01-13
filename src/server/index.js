const express = require('express') 
const app = express() 
const PORT = 3000; 
const homeRoute = require('/routes/homeRoute')

app.use(express.json())

app.use('/home', homeRoute)

app.get("/profile", (req, res) => {
    res.json(
        [{
            name: 'Thomas', 
            age: 34
        }]
)
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)

})