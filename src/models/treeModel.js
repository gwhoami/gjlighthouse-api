const { default: mongoose } = require("mongoose");

const treeSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    gparents: [mongoose.Schema.Types.Mixed],
    parents: [mongoose.Schema.Types.Mixed],
    other: [mongoose.Schema.Types.Mixed],
    spouse: [mongoose.Schema.Types.Mixed],
    child: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    TreeList: mongoose.model("TreeList", treeSchema)
}