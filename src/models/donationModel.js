const { default: mongoose } = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, index: true },
    general: [mongoose.Schema.Types.Mixed],
    cashdonation: [mongoose.Schema.Types.Mixed],
    valuableasset: [mongoose.Schema.Types.Mixed],
    kidseducation: [mongoose.Schema.Types.Mixed],
    kinddonation: [mongoose.Schema.Types.Mixed],
    globalwarming: [mongoose.Schema.Types.Mixed],
    construction: [mongoose.Schema.Types.Mixed],
    stocks: [mongoose.Schema.Types.Mixed],
    gifts: [mongoose.Schema.Types.Mixed],
    organs: [mongoose.Schema.Types.Mixed],
    other: [mongoose.Schema.Types.Mixed],
  },
  { autoCreate: true }
);

module.exports = {
  DonationList: mongoose.model('DonationList', donationSchema),
};
