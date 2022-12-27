import userServices from '../services/userServices'
let handleLogin = async (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);

    if (!req.body.email || !req.body.password) {
        return res.status(500).json({
            errorCode: 1,
            message: "Please input email & password!!",
        })
       
    }
    let userData = await userServices.checkAccount(req.body.email, req.body.password);
    console.log(userData)
    if (userData.user){
        return res.status(200).json({
            errorCode: userData.errorCode,
            message: userData.message,
            user : userData.user,
        })
    } else {
    return res.status(500).json({
        errorCode: userData.errorCode,
        message: userData.message,
    })
    }
}
module.exports = {
    handleLogin: handleLogin,
}