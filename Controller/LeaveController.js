import userModel from "../model/user.js"

class LeavesController {
    static insertLeaves = async (req, res) => {
    
        var objFriends = {leavetype:req.body.selectedLeave,head:req.body.selectedHead,appliedto:req.body.selectedApply,from:req.body.dateFrom,to:req.body.dateTo,reason:req.body.reason};
        userModel.findByIdAndUpdate(
           req.params.id, 
           { $push: { leaves: objFriends  } },
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

  export default LeavesController; 