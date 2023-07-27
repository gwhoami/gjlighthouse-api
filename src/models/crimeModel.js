const { default: mongoose } = require("mongoose");

const crimeSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    driving: [mongoose.Schema.Types.Mixed],
    policecase: [mongoose.Schema.Types.Mixed],
    church: [mongoose.Schema.Types.Mixed],
    schoolcollege: [mongoose.Schema.Types.Mixed],
    sports: [mongoose.Schema.Types.Mixed],
    finance: [mongoose.Schema.Types.Mixed],
    sexual: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    CrimeList: mongoose.model("CrimeList", crimeSchema)
}