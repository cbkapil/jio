import userModel from "../model/user.js"

class LoginIdController {
    static insertDates = async (req, res) => {
    
        var objFriends = {date:new Date(),timein:req.body.time,addressin:req.body.mycity};
        userModel.findByIdAndUpdate(
            req.params.id, 
           { $push: { dates: objFriends  }, },
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

  export default LoginIdController;