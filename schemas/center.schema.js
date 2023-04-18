import {
    Schema,
    model,
    Types
} from "mongoose";
const CenteraSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    open_date: {
        type: Date,
        required: true,
    },
    close_date: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
export default model("centera", CenteraSchema);