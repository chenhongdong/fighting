import express, { Response, Router, Request } from 'express'
const router: Router = express.Router()


router.get('/', (_req: Request, res: Response)=> {
    res.json({
        errno: 0,
        data: 'home'
    })
})


export default router