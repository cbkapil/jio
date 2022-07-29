import userModel from "../model/user.js"

class ExpenseController {
    static expense = async (req, res) => {
    
        var objFriends = {project:req.body.project,expense:req.body.expense,person:req.body.persons,from:req.body.dateFrom,to:req.body.dateTo,remarks:req.body.remarks};
        userModel.findByIdAndUpdate(
           req.params.id, 
           { $push: { exp: objFriends  } },
          function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                    res.status(200).json({message:"sucesss"})
                }
            });
        
        
      
    }
  }

  export default ExpenseController;