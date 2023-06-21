import  express, { request, response }  from "express"
import cors from "cors"
import ControllerEstadosCidades from "../controller/ControllerEstadosCidades"

const app = express()


app.use((request, response, next) => {
    
    response.header('Access-Control-Allow-Origin','*')

    response.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS')

    app.use(cors())

    next()
    
})


//endpoints

app.get('/estados', cors(), ControllerEstadosCidades.pegarEstados)


app.get('/estados/sigla/:uf', cors(),async (request,response,next) => {
    
    let siglaEstado = request.params.uf

})

app.get('/capital/sigla/:uf', cors(),async (request,response,next) => {
    
    let siglaEstado = request.params.uf

})

app.get('/regiao/:regiao', cors(),async (request,response,next) => {
    
    let siglaEstado = request.params.regiao

})

app.get('/capital', cors(),async (request,response,next) => {
    


})

app.get('/cidades/sigla/:uf', cors(),async (request,response,next) => {
    
    let siglaEstado = request.params.uf

})

app.listen(3333, function(){
    console.log('Servidor aguardando requisições na porta 3333')
})