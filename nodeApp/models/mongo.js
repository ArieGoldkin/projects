var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/tent_project', {
    useMongoClient: true
});

var mongoSchema =   mongoose.Schema;

var userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: Number },
    email: { type: String },
    moreInfo: { type: String },
    receiveUpdates: {type: Boolean, default: false }
});

var User = mongoose.model("User", userSchema);

// User.create({
//     firstName: "Arie", 
//     lastName: "goldkin",
//     phone: "0547039199",
//     email: "ariegoldk@gmail.com",
//     moreInfo: "HELLO THIS IS A USER POST!"
// });

module.exports = mongoose.model('Users',userSchema);
