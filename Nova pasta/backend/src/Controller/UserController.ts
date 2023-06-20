import { Request, Response } from "express"
import EmailService from "../services/EmailService"

const users = [
    {
        name:'Eduardo', email: 'eduardo@gmail.com'
    },
]


export default {
    async index(req : Request, res: Response) {
        return res.json(users)
    },
    async create(req : Request, res: Response) {
        const emailService = new EmailService()
        emailService.sendMail({
            to: {
                    name: 'Eduardo Ribeiro',
                    email: 'eduardo@gmail.com'
                },
            message: {
                    subject: 'teste',
                    body: 'oi'
                }
        }
            
        )
        return res.send()
    }
}