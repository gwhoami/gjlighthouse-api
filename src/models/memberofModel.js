const { default: mongoose } = require("mongoose");

const memberofSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    public: [mongoose.Schema.Types.Mixed],
    private: [mongoose.Schema.Types.Mixed],
    volunteer: [mongoose.Schema.Types.Mixed],
    sports: [mongoose.Schema.Types.Mixed],
    media: [mongoose.Schema.Types.Mixed],
    social: [mongoose.Schema.Types.Mixed],
    security: [mongoose.Schema.Types.Mixed],
    gaming: [mongoose.Schema.Types.Mixed],
    research: [mongoose.Schema.Types.Mixed],
    finance: [mongoose.Schema.Types.Mixed],
    community: [mongoose.Schema.Types.Mixed],
    construction: [mongoose.Schema.Types.Mixed]
    
}, {autoCreate: true});

module.exports = {
    MemberofList: mongoose.model("MemberofList", memberofSchema)
}