import { Router } from "express";
import users from "./user.router";
import post from "./post.router";
import comment from "./comment.router";

const router = Router();

// Unir rutas
router.use("/users", users);
router.use("/posts", post);
router.use("/comments", comment);

export default router;
