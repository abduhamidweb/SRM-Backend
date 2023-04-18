import {
    Schema,
    model,
    Types
} from "mongoose";
const positions = new Schema({
    dep_ref_id: [{
        type: Types.ObjectId,
        required: true,
        ref: "departments",
    }],
    pos_name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required:true
    },
    users: [{
        type: Types.ObjectId,
        require: true,
        ref: "Person"
}]
}, {
    timestamps: true,
    versionKey: false,
});
export default model("positions", positions);