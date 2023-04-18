import { Schema, model, Types } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      maxLength: 50,
      minLength: 10,
      required: true,
    },

    user: {
      type: Types.ObjectId,
      required: true,
      ref: "Person",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Post", PostSchema);
