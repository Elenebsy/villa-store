const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema(
  {
    user_id: { type: String,  required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    Available_dates: {type: String, required:true},
    Available_times: {type: String, required:true},
    Location:{type: String, required:true},
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("meeting", meetingSchema);
