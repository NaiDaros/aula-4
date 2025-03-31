import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.getAllAuthors);
routes.post("/authors", AuthorController.createAuthor);
routes.get("/authors/:id", AuthorController.getAuthorById);
routes.delete("/authors/:id", AuthorController.deleteAuthorById);

export default routes;