// funcion que va a retornar cuando no encuentre la ruta 
const error_handler = (error,request, response, next) =>{
    console.log(error)
    return response.status(500).json({
        success: false,
        message: 'error al ejecutar la petición'
    })
}

export default error_handler;