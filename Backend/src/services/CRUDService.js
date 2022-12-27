import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);
import db from '../models/index';

let createNewUser = async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let hashPassword = await hashUserPassword(data.password)
            await db.User.create({
                email:data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === 1? true:false,
                roleid: data.roleId,
            })
            resolve("Tạo user thành công");
        } catch (error) {
            reject(e)
        }
    })
    
}

let hashUserPassword = (password) =>{
    return new Promise(async(resolve, reject) => {
        try {
            var hash = await bcrypt.hashSync(password, salt);
            resolve(hash)
        } catch (error) {
           reject(e)
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
}