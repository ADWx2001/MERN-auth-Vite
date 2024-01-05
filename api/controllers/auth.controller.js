import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

//signup functiion
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created success" });
  } catch (err) {
    next(err);
  }
};

//sign in function
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(401, "User not found"));

    const validPassoword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassoword) return next(errorHandler(401, "Invalid credentials!"));
    //Sign token
    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...restofall } = validUser._doc;
    const expireDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expireDate })
      .status(200)
      .json(restofall);
  } catch (error) {
    next(error);
  }
  // if(!email || !password ) return res.status(400).json({message:'Please provide an email and a password'})
  // const user = await User.findOne({email}).select('+password') // select is used to show or hide some fields in the response
  // const user = await User.findOne({email}).select('+password');
  // if (!user) return res.status(400).json({message:'Invalid credentials'});
  // const validPassowrd=await bcryptjs.compare(password, user.password);
  // if(!validPassoword)return res.status(400).json({message:'Invalid credentials'});
  // res.status(200).json({token:user.generateAuthToken(), message:'Sign in successful'});
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expireDate = new Date(Date.now() + 3600000);
      res.cookie("access_token", token, {
        httpOnly: true,
        expires: expireDate,
      }).status(200).json(rest);
      //only if user already available in thr database
      // if not need to creatre new user
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-8),
        //   Math.floor(Math.random * 10000).toString(),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = user._doc;
      const expireDate = new Date(Date.now() + 3600000);
      res.cookie("access_token", token, {
        httpOnly: true,
        expires: expireDate,
      }).status(200).json(rest);
    }
  } catch (error) {
    next(error);
  }
};
