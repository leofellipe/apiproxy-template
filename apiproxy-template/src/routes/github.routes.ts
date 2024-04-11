import express from 'express'
import { handleGetUser } from '../controllers/github.controller'

const router = express.Router()

router.get('/user', handleGetUser)

export default router
