const { default: mongoose } = require('mongoose');

const marriageSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, index: true },
    general: [mongoose.Schema.Types.Mixed],
    specification: [mongoose.Schema.Types.Mixed],
    familyinfo: [mongoose.Schema.Types.Mixed],
    healthinfo: [mongoose.Schema.Types.Mixed],
    futureplan: [mongoose.Schema.Types.Mixed],
  },
  { autoCreate: true }
);

module.exports = {
  MarriageList: mongoose.model('MarriageList', marriageSchema),
};
