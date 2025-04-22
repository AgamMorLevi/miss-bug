import express from 'express' 
import cookieParser from 'cookie-parser'
import { bugService } from './services/bug.service.local.js'
import { loggerService } from './services/Logger.service.js' 

const app = express() 

app.get('/', (req, res) => res.send('Hello there')) 
app.listen(3030, () => console.log('Server ready at port 3030'))

//Provide an API for Bugs CRUDL: Implement one by one along with a bugService

//TODO: bug filter
//LIST
app.get('/api/bug', (req, res) => {}) 

//TODO: Set Defult value
//ADD / UPDATE
app.get('/api/bug/save', (req, res) => {}) 

//TODO:erfactor Err
//READ
app.get('/api/bug/:bugId', (req, res) => {}) 

//DELETE
app.get('/api/bug/:bugId/remove', (req, res) => {}) 

//TODO:Make the option for PDF

//BONUS:logger request
