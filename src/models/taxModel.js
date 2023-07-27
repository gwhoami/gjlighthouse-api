const { default: mongoose } = require('mongoose');

const taxSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, index: true },
    general: [mongoose.Schema.Types.Mixed],
    income: [mongoose.Schema.Types.Mixed],
    family: [mongoose.Schema.Types.Mixed],
    oincome: [mongoose.Schema.Types.Mixed],
    education: [mongoose.Schema.Types.Mixed],
    retirement: [mongoose.Schema.Types.Mixed],
    odeductions: [mongoose.Schema.Types.Mixed],
    home: [mongoose.Schema.Types.Mixed],
    selfemploy: [mongoose.Schema.Types.Mixed],
    taxpay: [mongoose.Schema.Types.Mixed],
    donation: [mongoose.Schema.Types.Mixed],
  },
  { autoCreate: true }
);

module.exports = {
  TaxList: mongoose.model('TaxList', taxSchema),
};
