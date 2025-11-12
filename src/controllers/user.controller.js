import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser=asyncHandler(async(req,res)=>{
    // get user details from frontend
    // validation- not empty
    // check if user already exists: username,email
    // check for images, check for avatar
    // upload them 


   const{fullName,email,username,password}= req.body
   console.log("email:",email);
   res.send("user added successfully");
     })

  
    


export {
    registerUser,
}
 
