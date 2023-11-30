const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        minLength: 4,
        lowercase: true,
        trim: true

    },
    author: String,
    subjects: [String],
    date: { type: mongoose.SchemaTypes.Date, default: Date.now },
    price: { type: mongoose.SchemaTypes.Number, min: 5,required:true },
    isPublished: Boolean

});
const Course = mongoose.model("Courses", courseSchema);//כביכול מחלקה שמגידרה מה הסוג של הנתונים בטבלת קורסים
module.exports = Course;