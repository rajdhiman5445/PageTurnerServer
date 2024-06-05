const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    book_title: {
        type: String,
        required: true,
    },
    author_name: {
        type: String,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    }
});

const itemModel = mongoose.model('Item', itemSchema); // 'Item' is the model name
module.exports = itemModel;
