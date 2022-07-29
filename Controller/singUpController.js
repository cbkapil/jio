import UserModel from "../model/user.js"
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

class SignupController {
    static signUp = async (req, res) => {
    
    
       let userExist = await UserModel.exists({email:req.body.email},)
      if(userExist){

        return res.json({
          message: 'Email already exists',
          status: false
      })
      }
      
      else{

        var exp = new UserModel({
          project:String,
          expense:String,
          persons:String,
          dateFrom:String,
          dateTo:Date,
          advanceamount:Number,
          actualamount:Number,
          remarks:String
          
        });
         
        
       let user = new UserModel({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            age:req.body.age,
            address:req.body.address,
            designation:req.body.designation,
           
            

            
        });
        
        await user.save();
       return res.json({
        message: 'User register success',
        status: true,
        
     })
        
      }
    
}
}

export default SignupController;