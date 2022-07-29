import UserModel from "../model/user.js"

class getTaskController {
    static getTask = async (req, res) => {
      try {
        

     const result=   UserModel.findById(req.params.id)
    .select({ "tasks": { "$slice": -5 }})
    .exec(function(err,doc) {
        if(err){
            console.log(err)
        }
        else{
            res.send(doc)
        }
        

    })
       


      } catch (error) {
        console.log(error)
      }
    }
  }

  export default getTaskController