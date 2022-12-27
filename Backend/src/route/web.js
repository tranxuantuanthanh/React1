import express from 'express';
import homeController from '../controller/homeController';
import userController from '../controller/userController';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/",homeController.homePage)
    router.get("/crud",homeController.getCRUD)
    router.post("/post_crud",homeController.postCRUD)
    router.post("/api/login" , userController.handleLogin)
    return app.use("/", router);
}
module.exports = initWebRoutes;