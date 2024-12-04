import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        
        const loggedInUserId = req.user._id;
        

        //message userself remove all insid find
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        
        res.status(200).json(filteredUsers );

    } catch (error) {
        console.log("Error in getting users", error.message);
        res.status(500).json({error: "Internal error went wrong"});
        
    }
};