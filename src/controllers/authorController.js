import author from "../models/Author.js";

class AuthorController {
    static async getAllAuthors(req, res) {
        try {
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        } catch(error) {
            res.status(500).send(error.message);
        }
    };

    static async createAuthor(req, res) {
        try {
            const newPost = new author(req.body);
            await newPost.save();
            res.status(201).json({
                message: "Post criado com sucesso!",
                post: newPost,
            });
        } catch(error) {
            res.status(500).send(error.message);
        }
    };

    static async getAuthorById(req, res) {
        try {
            const id = req.params.id;
            const foundPost = await author.findById(id);
            if(!foundPost) {
                return res.status(404).send("Post não encotrando!");
            }
            res.status(200).json(foundPost);
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    static async deleteAuthorById(req, res) {
        try {
            const id = req.params.id;
            const deletePost = await author.findById(id);
            res.status(200).send("Post removido com sucesso!");
            if(!deletePost) {
                return res.status(404).send("Post não encotrando!");
            }        
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
}

export default AuthorController;
