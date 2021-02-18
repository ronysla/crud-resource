const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const { allowedOrigins, PORT } = require('./vars')

app.use(cors())
app.use(express.json());
app.use(morgan('dev'))

const NotesRoutes = require('../routes/resource')
class App {
    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }
    config() {
        if (process.env.NODE_ENV == 'production') {
            console.log('Running in production mode')
            this.app.use(cors({
                origin: allowedOrigins
            }))
        }
        else {
            console.log('Running in development mode')
            this.app.use(cors())
            this.app.use(morgan('dev'))
        }
        this.app.set('port', PORT)

        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))

    }

    routes() {
        this.app.use('/resource', NotesRoutes)
    }
}
module.exports = new App().app;