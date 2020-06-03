const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios')
 
axios.post('https://hooks.slack.com/services/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', {
    text: 'Project X'
  })
  .then(function (response) {
    console.log(response);
  })


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).send('Server is working')
})

app.post('/getmovie', (req, res) => {
    const movie = req.body.queryResult.parameters.movieName
    responseApi.on('end', () => {


        return res.json(
            {
                "text": "Hello, world."
            }
        )
    })
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})
