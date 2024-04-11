import { randomUUID } from 'crypto'
import { NextFunction, Request, Response } from 'express'

export function requestLog(req: Request, res: Response, next: NextFunction): void {
  const uuid = randomUUID()

  res.locals.requestId = uuid

  console.info(
    `[REQUEST] ${req.url} --> id`,
    res.locals.requestId,
    'params:',
    req.params,
    'body:',
    req.body
  )
  next()
}
