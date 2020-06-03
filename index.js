const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).send('Server is working')
})

app.post('/getmovie', (req, res) => {

        return res.json(
            {
                "text": "Hello, world."
            }
        )
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})
