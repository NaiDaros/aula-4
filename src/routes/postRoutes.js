import express from "express";
import PostController from "../controllers/postController.js";

const routes = express.Router();

routes.get("/posts", PostController.getAllPosts);
routes.post("/posts", PostController.createPost);
routes.get("/posts/:id", PostController.getPostById);
routes.delete("/posts/:id", PostController.deletePostById);

export default routes;