import express from "express";
import { createPost, getPosts } from "../controllers/postController";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getPosts);

router.post("/", authenticateUser, createPost);

export default router;