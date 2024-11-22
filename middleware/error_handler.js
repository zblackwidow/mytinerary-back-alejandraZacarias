// Handler para errores generales
const error_handler = (err, request, response, next) => {
    console.error(err.stack);
    return response.status(500).json({
        success: false,
        message: "Algo salió mal en el servidor",
        error: err.message
    });
}

export default error_handler ;
