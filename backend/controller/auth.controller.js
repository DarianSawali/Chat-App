import bcryptjs from "bcryptjs"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"});
        }

        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({error:"Username already exists"});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender=== "male" ? boyProfilePic : girlProfilePic,
        });

        if(newUser){

            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ error:"Invalid Data" });
        }

    } catch (error) {
        console.log("Error", error.message)
        res.status(500).json({ error:"Server Error" });
    }
}

export const login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({ error:"Invalid Credentials" })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});

    } catch (error) {
        console.log("Error", error.message)
        res.status(500).json({ error:"Server Error" });
    }
}

export const logout = async(req, res) => {
    // res.send("logoutUser");
    // console.log("logoutUser");
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Successfully Logged Out" });
        
    } catch (error) {
        console.log("Error", error.message)
        res.status(500).json({ error:"Server Error" });
    }
}