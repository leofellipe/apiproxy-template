import { Response } from 'express'

export default function requestResponseHandler(
  res: Response,
  code: number,
  data?: unknown
): Response {
  console.info('[RESPONSE] --> id:', res.locals.requestId, 'Code:', code, 'Data:', data)
  if (code >= 400 && code < 500) {
    return res.status(code).json({ success: false, data })
  }
  if (code >= 500 && code < 600) {
    return res.status(code).json({ success: false, data: 'Internal server error' })
  }
  if (code >= 200 && code < 300) {
    return res.status(code).json({ success: true, data })
  }
  throw new Error('Status code not implemented on apiOut')
}
