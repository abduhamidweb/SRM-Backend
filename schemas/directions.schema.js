import {
    Schema,
    model,
    Types
} from "mongoose";
const directions = new Schema({
    dep_ref_id: [{
        type: Types.ObjectId,
        required: true,
        ref: "departments",
    }],
    groups: [{
        type: Types.ObjectId,
        required: true,
        ref: "groups",
    }],
    dir_name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
    },
    duration: {
        type: Number,
    }
}, {
    timestamps: true,
    versionKey: false,
});
export default model("directions", directions);