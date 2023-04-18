import {
  Schema,
  model,
  Types
} from "mongoose";
const incomesSchema = new Schema({
  user_ref_id: [{
    type: Types.ObjectId,
    require: true,
    ref: "Person"
  }],
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

export default model("incomes", incomesSchema);