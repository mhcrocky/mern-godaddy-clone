import { Router } from "express";
import * as auth from "../controllers/authController";
import * as todo from '../controllers/todoController';
import { getUserId } from "../controllers/todoController";
const router = Router();

router.route("/register").post(auth.register);
router.route("/user-verify").get(auth.verifyUser);
router.route("/logout").get(auth.logOut);
router.route("/login").post(auth.login);

router.route('/todo').post(getUserId, todo.create);
router.route('/todo').get(getUserId, todo.get);
router.route('/todo/destory').put(getUserId, todo.destory);
router.route('/todo').put(getUserId, todo.update);

export default router;
