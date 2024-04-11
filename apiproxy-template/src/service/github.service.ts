import { githubApi } from '../shared/githubApi'
import { IGithubUserResponse } from '../interfaces/Github'

export async function getGithubUser(userName: string) {
  const response = await githubApi.get<IGithubUserResponse>(`/users/${userName}`)

  return response.data
}
