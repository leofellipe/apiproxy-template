import './config/enviroment'
import express from 'express'
import router from './routes/index.routes'
import { requestLog } from './middleware/requestLog.middleware'
import { notFoundRouter } from './routes/notFound.routes'
import { errorHandler } from './middleware/errorHandler.middleware'

const app = express()

app.use(express.json())
app.use(requestLog)
app.use('/api', router)
app.use(errorHandler)
app.use('*', notFoundRouter)

export default app
