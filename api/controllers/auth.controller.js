export const signup = (req,res)=>{ 
    res.json({
        message:"Signup api auth.controller.js file",
    });
    // console.log(req.body);
    // const { username,email, password} = req.body;
    // const newUser = new User({username,email,password});

    // try{
    //     await newUser.save()
    //     res.status(201).json({message:"User created successfully"});
    // }catch(err){
    //     res.status(500).json(err.message);
    // }
};