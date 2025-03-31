import post from "../models/Post.js";

class PostController {
    static async getAllPosts(req, res) {
        try {
            const listPosts = await post.find({});
            res.status(200).json(listPosts);
        } catch(error) {
            res.status(500).send(error.message);
        }
    };

    static async createPost(req, res) {
        try {
            const newPost = new post(req.body);
            await newPost.save();
            res.status(201).json({
                message: "Post criado com sucesso!",
                post: newPost,
            });
        } catch(error) {
            res.status(500).send(error.message);
        }
    };

    static async getPostById(req, res) {
        try {
            const id = req.params.id;
            const foundPost = await post.findById(id);
            if(!foundPost) {
                return res.status(404).send("Post não encotrando!");
            }
            res.status(200).json(foundPost);
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    static async deletePostById(req, res) {
        try {
            const id = req.params.id;
            const deletePost = await post.findById(id);
            res.status(200).send("Post removido com sucesso!");
            if(!deletePost) {
                return res.status(404).send("Post não encotrando!");
            }        
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
}

export default PostController;
