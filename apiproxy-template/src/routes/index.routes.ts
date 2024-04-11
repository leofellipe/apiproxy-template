import express from 'express'
import 'express-async-errors'
import { Request, Response } from 'express'
import github from './github.routes'
import passport from '../middleware/passport.middleware'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello, World!' })
})

router.use(passport)

router.use('/github', github)

export default router
