import {
  Schema,
  model,
  Types
} from "mongoose";

const loginSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

export default model("login", loginSchema);