import express, { Request, Response } from 'express'
import 'express-async-errors'
import requestResponseHandler from '../middleware/requestResponseHandler.middleware'

export const notFoundRouter = express.Router()

notFoundRouter.all('*', (req: Request, res: Response) => {
  return requestResponseHandler(res, 404, 'Route not found')
})
