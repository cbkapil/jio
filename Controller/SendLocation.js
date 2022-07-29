import userModel from "../model/user.js"

class sendlocController {
    static sendLoc = async (req, res) => {
    
        var objFriends ={address:req.body.city,place:req.body.place,purpose:req.body.purpose}
        userModel.findByIdAndUpdate(
           req.params.id, 
           { $push: { location: objFriends  } },
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

  export default sendlocController;