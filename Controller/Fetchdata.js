import UserModel from "../model/user.js"

class PropsController {
    static getProps = async (req, res) => {
      try {
        

     const result=   UserModel.findById(req.params.id)
    .select( "selecthead")
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

  export default PropsController