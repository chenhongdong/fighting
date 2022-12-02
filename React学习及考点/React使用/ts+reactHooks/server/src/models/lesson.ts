import mongoose, { Schema, Document, Model } from "mongoose";

export interface LessonDocument extends Document {
    order: number   
    title: string   // 课程标题
    video: string   // 课程视频
    poster: string  // 课程海报
    url: string     
    price: string   // 课程价格
    category: string    // 课程分类
}

const LessonSchema: Schema<LessonDocument> = new Schema({
    order: Number,
    title: String,
    video: String,
    poster: String,
    url: String,
    price: String,
    category: String
}, {
    timestamps: true,
    toJSON: {
        transform: function(_doc: LessonDocument, res: LessonDocument) {
            res.id = res._id
            delete res._id
            delete res.__v
            return res
        }
    }
})


export const Lesson: Model<LessonDocument> = mongoose.model('Lesson', LessonSchema)

