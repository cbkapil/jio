import userModel from "../model/user.js"

class signoutController {
    static signout = async (req, res) => {
    
        var objFriends = {timeout:req.body.time,addressout:req.body.mycity};
        userModel.findByIdAndUpdate(
            req.params.id, 
           { $push: { dates: objFriends  } },
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

  export default signoutController;