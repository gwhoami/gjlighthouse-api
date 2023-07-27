const { default: mongoose } = require('mongoose');

const sportSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, index: true },
    league: [mongoose.Schema.Types.Mixed],
    domestic: [mongoose.Schema.Types.Mixed],
    international: [mongoose.Schema.Types.Mixed],
    awards: [mongoose.Schema.Types.Mixed],
    rank: [mongoose.Schema.Types.Mixed],
  },
  { autoCreate: true }
);

module.exports = {
  SportList: mongoose.model('SportList', sportSchema),
};
