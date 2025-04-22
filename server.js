import express from 'express' 
import cookieParser from 'cookie-parser'

import { bugService } from './services/bug.service.js'
import { loggerService } from './services/logger.service.js' 

const app = express() 

app.use(express.static('public'))
app.use(cookieParser())


//Provide an API for Bugs CRUDL: Implement one by one along with a bugService

//TODO: List of bugs
//* Read
app.get('/api/bug', (req, res) => {
   bugService.query()
   .then(bugs => res.send(bugs))
   .catch(err => {
    loggerService.error('Cannot get bugs', err)
    res.status(500).send('Cannot load bugs')
})

}) 

//TODO: Set Defult value
//* Create/Edit 
app.get('/api/bug/save', (req, res) => {

    const bugToSave ={
       _id: req.query._id|| '',
      title: req.query.title || '',
      description: req.query.description || '',
      severity: +req.query.severity || 0,
    }

    bugService.save(bugToSave)
    .then(savedBug => res.send(savedBug))
        .catch(err => {
            loggerService.error('Cannot save bug', err)
            res.status(500).send('Cannot save bug')
        })

}) 

//TODO:erfactor Err
app.get('/api/bug/:bugId', (req, res) => {
    const { bugId } = req.params
    bugService.getById(bugId)
        .then(bug => res.send(bug))
        .catch(err => {
            loggerService.error('Cannot get bug', err)
            res.status(500).send('Cannot load bug')
        })

}) 

app.get('/api/bug/:bugId/remove', (req, res) => {
    const { bugId } = req.params
    bugService.remove(bugId)
        .then(() => res.send('bug Removed'))
        .catch(err => {
            loggerService.error('Cannot remove bug', err)
            res.status(500).send('Cannot remove bug')
        })


}) 

//TODO:Make the option for PDF

const port = 3030

app.get('/', (req, res) => res.send('Hello there')) 
app.listen(port, () =>
    loggerService.info(`Server listening on port http://127.0.0.1:${port}/`)
)


//BONUS:logger request
