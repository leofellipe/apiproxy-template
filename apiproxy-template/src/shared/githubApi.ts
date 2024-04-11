import axios from 'axios'

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
})

export { githubApi }
