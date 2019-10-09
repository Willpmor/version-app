const mongoose = require("mongoose");

const ThumbnailSchema = new mongoose.Schema ({
    author : String,
    content: String,
    CreatedAt : {
        type: Date,
        default : Date.now
    }
}); 

module.exports = mongoose.model("Thumbnail", ThumbnailSchema);