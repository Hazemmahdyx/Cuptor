import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

const app = express()

app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json({ limit: '60mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

export default app
