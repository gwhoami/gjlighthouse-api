const { default: mongoose } = require('mongoose');

const billingSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, index: true },
    billing: [mongoose.Schema.Types.Mixed],
    paymentto: [mongoose.Schema.Types.Mixed],
    
  },
  { autoCreate: true }
);

module.exports = {
  BillingList: mongoose.model('BillingList', billingSchema),
};
