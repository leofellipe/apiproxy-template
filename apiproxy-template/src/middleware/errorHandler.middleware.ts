import { NextFunction, Request, Response } from 'express'
import requestResponseHandler from './requestResponseHandler.middleware'
import Joi from 'joi'
import { AxiosError } from 'axios'
import { GenericRouteError } from '../utils/customErrors'

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  if (err instanceof SyntaxError) {
    return requestResponseHandler(res, 400, err.message)
  }
  if (err instanceof GenericRouteError) {
    return requestResponseHandler(res, err.code, err.message)
  }
  if (err instanceof Joi.ValidationError) {
    return requestResponseHandler(res, 400, err.message)
  }
  if (err instanceof AxiosError) {
    console.error(err)
    return requestResponseHandler(res, err.response?.status || 400, err.message)
  }
  console.error(err)
  return requestResponseHandler(res, 500, 'Internal server error')
}
