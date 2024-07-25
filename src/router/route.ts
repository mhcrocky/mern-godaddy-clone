import { Router } from "express";
import * as auth from "../controllers/authController";
import * as todo from '../controllers/todoController';
const router = Router();

router.route("/register").post(auth.register);
router.route("/user-verify").get(auth.verifyUser);
router.route("/logout").get(auth.logOut);
router.route("/login").post( auth.login);

router.route('/todo').post(todo.create);
router.route('/todo/:id').post(todo.update);

export default router;
