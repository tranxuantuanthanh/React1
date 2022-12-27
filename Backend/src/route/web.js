import express from 'express';
import homeController from '../controller/homeController';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/",homeController.homePage)
    router.get("/crud",homeController.getCRUD)
    router.post("/post_crud",homeController.postCRUD)
    return app.use("/", router);
}
module.exports = initWebRoutes;