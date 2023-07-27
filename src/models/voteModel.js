const { default: mongoose } = require("mongoose");

const voteSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    general: [mongoose.Schema.Types.Mixed],
    votetype: [mongoose.Schema.Types.Mixed],
    orgvote: [mongoose.Schema.Types.Mixed],
    myvote: [mongoose.Schema.Types.Mixed]

}, {autoCreate: true});

module.exports = {
    VoteList: mongoose.model("VoteList", voteSchema)
}