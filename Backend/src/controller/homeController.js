const db = require("../models/index");
const CRUDService = require("../services/CRUDService");

let homePage = async (req, res) => {
   try {
    let data = await db.User.findAll();
    console.log(data)
    return res.render("homepage.ejs",{
        data : JSON.stringify(data)
    })
   } catch (e) {
    console.log(e);
   }
}

let getCRUD = (req, res) => {
    try {
     return res.render("crud.ejs")
    } catch (e) {
     console.log(e);
    }
 }

 let postCRUD = async (req, res) => {
    await CRUDService.createNewUser(req.body);
    return res.send("oke")
 }

module.exports = {
    homePage:homePage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
}