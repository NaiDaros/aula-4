import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const postSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {type: String, require: true},
    description: { type: String, require: true},
    // author: { type: String, require: true },
    author: authorSchema
}, {versionKey: false});

const post = mongoose.model("posts", postSchema);

export default post;