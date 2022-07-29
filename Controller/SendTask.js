import userModel from "../model/user.js"

class TaskController {
    static task = async (req, res) => {
    
        var objFriends = {title:req.body.title,project:req.body.selected,description:req.body.description};
        userModel.findByIdAndUpdate(
           req.params.id, 
           { $push: { tasks: objFriends  } },
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

  export default TaskController;