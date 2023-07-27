const { default: mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    general: [mongoose.Schema.Types.Mixed],
    menu: [mongoose.Schema.Types.Mixed],
    team: [mongoose.Schema.Types.Mixed],
    focus: [mongoose.Schema.Types.Mixed],
    achievement: [mongoose.Schema.Types.Mixed],
    custcomment: [mongoose.Schema.Types.Mixed]
    
    
}, {autoCreate: true});

module.exports = {
    EventList: mongoose.model("EventList", eventSchema)
}