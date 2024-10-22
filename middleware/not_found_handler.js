// funcion que va a retornar cuando no encuentre la ruta 
const not_found_handler = (request, response, next) =>{
    return response.status(404).json({
        success: false,
        message: `ruta no encontrada - La petición con el metodo ${request.method} con la ruta ${request.url} no fue encontrada`
    })
}

export default not_found_handler;