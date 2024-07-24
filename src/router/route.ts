import { Router } from "express";
import * as controller from "../controllers/appController";

const router = Router();

router.route("/register").post(controller.register);
router.route("/user-verify").get(controller.verifyUser);
router.route("/logout").get(controller.logOut);
router.route("/login").post( controller.login);

export default router;
