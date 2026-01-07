const express = require('express') 
const app = express() 

app.use(express.json())

app.post('/todos', (req, res) => {
    const { task } = req.body

    const todo = [] 
    todo.push(task) 

    res.send("task was added to todo list")

}) 


app.get('/todos:id', (req, res) => {

})





app.listen(3000, () => {
    console.log('listning on port 3000')
})