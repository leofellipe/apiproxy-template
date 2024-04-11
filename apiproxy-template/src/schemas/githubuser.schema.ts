import joi from 'joi'
import { IGithubUser } from '../interfaces/Github'

export const githubUser = joi.object<IGithubUser>({
  username: joi.string().required().min(3)
})
