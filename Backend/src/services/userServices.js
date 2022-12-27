import db from "../models";
import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);

let checkAccount = (email, password) => {
    let userData = {}
    return new Promise(async(resolve, reject) =>{
        try {
            let isEmailExist = await checkEmail(email);
            if(isEmailExist){
                let user = await db.User.findOne({
                    where:{
                        email:email,
                    },
                    raw: true
                })
                if(bcrypt.compareSync(password, user.password)){
                    userData.errorCode = 0;
                    userData.message = "True account";
                    userData.user = user;
                }else{
                    userData.errorCode = 2;
                    userData.message = "Wrong password";
                }
            } else{
                userData.errorCode = 3;
                userData.message = "Email no exits in our system";
            }
        resolve(userData);
        } catch (error) {
            reject(error)
        }
    })

}

let checkEmail = (email) => {
    return new Promise(async (resolve, reject)=>{
        try {
            let user = await db.User.findOne({
                where: {email : email},
                raw: true,
            })
            console.log(user);
            if (user){
                resolve(true);
            }else{
                resolve(false);
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    checkAccount:checkAccount,
}