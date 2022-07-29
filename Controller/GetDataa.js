import userModel from "../model/user.js"

class GetDataaController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await userModel.find()
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default GetDataaController