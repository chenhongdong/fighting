import mongoose, { Schema, Document, Model } from "mongoose";


export interface SliderDocument extends Document {
    url: string
}

const SliderSchema: Schema<SliderDocument> = new Schema({
    url: String
}, {
    timestamps: true,
    toJSON: {
        transform: function(_doc: any, res: any) {
            res.id = res._id
            // 删除不想暴露返回的字段
            delete res._id
            delete res.__v
            delete res.password
            delete res.createdAt
            delete res.updatedAt
            return res
        }
    }
})


export const Slider: Model<SliderDocument> = mongoose.model('Slider', SliderSchema)