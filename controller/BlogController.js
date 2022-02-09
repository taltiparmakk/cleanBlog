const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const BlogPost = new Schema({
  author: String,
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now
  },
});
const Blog = mongoose.model("Blog", BlogPost);
module.export = Blog;








