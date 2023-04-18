import {
  Schema,
  model,
  Types
} from "mongoose";
const outlaySchema = new Schema({
  reason: {
    type: String,
  },
  amount: {
    type: String,
  },
}, {
  timestamps: {
    createdAt: "create_at",
  },
  versionKey: false,
});

export default model("outlay", outlaySchema);