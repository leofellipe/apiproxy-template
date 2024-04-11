import { Request, Response } from 'express'
import { getGithubUser } from '../service/github.service'
import requestInputValidator from '../middleware/requestInputValidator.middleware'
import { githubUser } from '../schemas/githubuser.schema'
import requestResponseHandler from '../middleware/requestResponseHandler.middleware'

export async function handleGetUser(req: Request, res: Response) {
  const body = requestInputValidator(req.body, githubUser)
  const responseService = await getGithubUser(body.username)
  return requestResponseHandler(res, 200, responseService)
}
