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

    } catch (error) {

    }
}

export const login = (req, res) => {
    res.send("loginUser");
    console.log("loginUser");
}

export const logout = (req, res) => {
    res.send("logoutUser");
    console.log("logoutUser");
}