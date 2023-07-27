const { default: mongoose } = require('mongoose');

const savingSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, index: true },
    onlinesave: [mongoose.Schema.Types.Mixed],
    studentsave: [mongoose.Schema.Types.Mixed],
    certifysave: [mongoose.Schema.Types.Mixed],
    moneymarket: [mongoose.Schema.Types.Mixed],
    tradingonline: [mongoose.Schema.Types.Mixed],
    healthsave: [mongoose.Schema.Types.Mixed],
    irasaving: [mongoose.Schema.Types.Mixed],
    investmentsave: [mongoose.Schema.Types.Mixed],
    insurancesave: [mongoose.Schema.Types.Mixed],
  },
  { autoCreate: true }
);

module.exports = {
  SavingList: mongoose.model('SavingList', savingSchema),
};
