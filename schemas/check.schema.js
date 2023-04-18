import {
  Schema,
  model,
  Types
} from "mongoose";

const checkSchema = new Schema({
  user_ref_id: [{
    type: Types.ObjectId,
    require: true,
    ref: "Person"
  }],
  gr_ref_id: [{
    type: Types.ObjectId,
    require: true,
    ref: "groups"
  }],
  not_in_class: {
    type: String,
  },
}, {
  timestamps: {
    createdAt: "create_at",
  },
  versionKey: false,
});

export default model("Check", checkSchema);