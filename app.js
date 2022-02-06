const express = require('express');
const app = express();

const members = require('./routes/members')
const bands = require('./routes/bands')
const logger = require('./logger')

// static asset
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false}))
app.use([logger])

// parse json data
app.use(express.json())

app.use('/api/bands', bands)
app.use('/api/members', members)

app.get('/', logger, (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('Home Page')
  })

app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})
