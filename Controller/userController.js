import UserModel from "../model/user.js"
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

class UserController {
    static userLogin = async (req, res) => {
      if(req.body.password && req.body.email)
     { 
       let user = await UserModel.findOne(req.body)
      if(user){
        res.send(user)
      }else{
        res.send({result:"no user found"})
      }
    }else{
      res.send({result:"no user found"})
    }

}
}

export default UserController;