const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    msg: String,
});
const model = mongoose.model("Message", messageSchema);

module.exports = model