import {
    Schema,
    model,
    Types
} from "mongoose";
const departments = new Schema({
    center_ref_id: [{
        type: Types.ObjectId,
        required: true,
        ref: "centera",
    }],
    dep_name: {
        type: String,
        required: true,
    },
    positions: [{
        type: Types.ObjectId,
        required: true,
        ref: "positions",
    }],
    directions: [{
        type: Types.ObjectId,
        required: true,
        ref: "directions",
    }],
}, {
    timestamps: true,
    versionKey: false,
});
export default model("departments", departments);