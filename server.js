import express from 'express' 
import cookieParser from 'cookie-parser'

import { bugService } from './services/bug.service.js'
import { loggerService } from './services/Logger.service.js'

const app = express() 

app.use(express.static('public'))
app.use(cookieParser())


//Provide an API for Bugs CRUDL: Implement one by one along with a bugService

//TODO: List of bugs
app.get('/api/bug', (req, res) => {
   bugService.query()
   .then(bugs => res.send(bugs))
   .catch(err => {
    loggerService.error('Cannot get bugs', err)
    res.status(500).send('Cannot load bugs')
})

}) 

//TODO: Set Defult value
app.get('/api/bug/save', (req, res) => {}) 

//TODO:erfactor Err
app.get('/api/bug/:bugId', (req, res) => {}) 

app.get('/api/bug/:bugId/remove', (req, res) => {}) 

//TODO:Make the option for PDF

const port = 3030

app.get('/', (req, res) => res.send('Hello there')) 
app.listen(port, () =>
    loggerService.info(`Server listening on port http://127.0.0.1:${port}/`)
)


//BONUS:logger request
