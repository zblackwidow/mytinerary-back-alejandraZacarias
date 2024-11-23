import User from "../../models/User.js";

const deleteUser = async (request, response, next) => {
    try {
        let userDelete = await User.deleteOne(
            {
                _id: request.body._id
            }
        )
        return response.status(200).json({
            response: userDelete
        })
    }
        catch(error){
            next(error)
        }

    }

export { deleteUser };