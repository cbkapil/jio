import UserModel from "../model/user.js"

class getExpenseController {
    static getExpense = async (req, res) => {
      try {
        

     const result=   UserModel.findById(req.params.id)
    .select({ "exp": { "$slice": -4 }})
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

  export default getExpenseController