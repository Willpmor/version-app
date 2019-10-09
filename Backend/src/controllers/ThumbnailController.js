const Thumbnail = require("../models/Thumbnail");

module.exports = {
    async index(req, res) {
        const thumbnails = await Thumbnail.find({}).sort("-CreateAt");

        return res.json(thumbnails);
    },
    async store(req, res) {
        const thumbnail = await Thumbnail.create(req.body);

        req.io.emit("thumbnail", thumbnail);

        return res.json(thumbnail);
    }
    
}