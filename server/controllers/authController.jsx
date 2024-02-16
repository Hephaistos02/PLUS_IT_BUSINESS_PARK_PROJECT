const User = require ('../models/user.jsx')
const { hashPassword, comparePassword } = require('../helpers/auth.jsx')
const jwt = require ("jsonwebtoken")




//registering user
const registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        //check if name was entered
        if(!name){
            return res.json({
                error:"name is required"
            })
        }

        //check if password was entered
        if(!password || password.length < 6){
            
            return res.json({
                error:"Password is required and should be atleast 6 characters long"
            })
        }

        //check email was entered

        const exist = await User.findOne({email})   //checking whether the entered email already exist in the database
        if(exist) {
    
            return res.json({
                error:"Email is taken already" 
            })
        }


        const hashedPassword = await hashPassword(password)
        //creating user in DB

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })
        return res.json(user)

    } catch (error) {
        console.log(error);
    }
}


//login user

const loginUser = async (req,res) =>{
    try {
        const  {email, password}= req.body;
        
        //validation
        //if user exist
        const user = await User.findOne({email})
        if(!user) {
            return  res.status(500).json({
                error : "User with this email does not exist." })
        }

        // check if password match
        const match = await comparePassword (password,user.password)
        if(match) {
            jwt.sign({email: user.email, id :user._id, name: user.name }, process.env.JWT_SECRET , {} , (err,token) =>{
                if(err) throw err;
                res.cookie('token', token).json(user)
                localStorage.setItem('token', result.data.token)
            })
        }
        if(!match){
            res.json({
                error: "Passwords do not match"
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const getProfile =(req,res) => {
const {token} = req.cookies
if(token) {
    
    jwt.verify(token, process.env.JWT_SECRET, {} , (err,user) => {
        if(err) throw err;
        res.json(user)
    
    })
}else{
    res.json(null)
}
}



module.exports= {
    registerUser,
    loginUser,
    getProfile, 
}