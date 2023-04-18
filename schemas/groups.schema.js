import {
    Schema,
    model,
    Types
} from "mongoose";
const GroupsSchema = new Schema({
    dir_ref_id: [{
        type: Types.ObjectId,
        ref: "directions"
    }],
    gr_number: {
        type: Number,
        
        required: true,
    },
    users: [{
        type: Types.ObjectId,
        require: true,
        ref: 'Person'
    }]
}, {
    timestamps: true,
    versionKey: false,
});
export default model("groups", GroupsSchema);