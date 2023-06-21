import { getEstados } from "../model/EstadosCidades";
import { Request, Response } from "express";


export default {
    async pegarEstados(request: Request,response: Response) {
    
        return response.json( await getEstados())

    }
}