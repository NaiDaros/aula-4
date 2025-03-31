import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import post from "./models/Post.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (error) => {
    console.error("Erro de conexão", error);
});

connection.once("open", () => {
    console.log("Conexão com o banco realizada com sucesso!");
});

const app = express();
routes(app);

// Get all posts
// app.get("/posts", async (req, res) => {
//     try {
//         const listPosts = await post.find({});
//         res.status(200).json(posts);
//     } catch(error) {
//         res.status(500).send();
//     }
// });

// Create new post
app.post("/posts", async (req, res) => {
    try {
        const newPost = post(req.body);
        await newPost.save();
        res.status(200).json({
            message: "Post criado com sucesso!",
            post: newPost,
        });
    } catch(error) {
        res.status(500).send(error.message);
    }
});

// Get post by ID
// app.get("/posts/:id", async (req, res) => {
//     try {
//         const postId = await post.findById(req.params.id);
//         if(!postId) {
//             return res.status(404).send("Post não encotrando!");
//         }
//         res.status(200).json(postId);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.post("/posts", (req, res) => {
//     posts.push(req.body);
//     res.status(201).send("Post criado com sucesso!");
// });

// app.put("/posts/:id", (req, res) => {
//     const index = searchPost(req.params.id);
//     posts[index].title = req.body.title;
//     posts[index].description = req.body.description;
//     posts[index].author = req.body.author;
//     res.status(200).json(posts[index]);
// });

// Delete post
app.delete("/posts/:id", async (req, res) => {
    try {
        const deletePost = await post.findById(req.params.id);
        res.status(200).send("Post removido com sucesso!");
        if(!deletePost) {
            return res.status(404).send("Post não encotrando!");
        }        
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default app;
