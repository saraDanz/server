const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Course = require("../models/course");


router.get("/", async (req, res) => {
    let courses = await Course.find();
    return res.send(courses);
})
router.get("/:id", async (req, res) => {

    const id = req.params.id;
    let course = await Course.findOne({ "_id": id });//מקבל כל פרמטר לסינון
    //let course =await Course.findById(id);//מקבל כל פרמטר לסינון
    if (!course)
        return res.status(404).send("sorry no such course");
    return res.send(course);
})
router.post("/", async (req, res) => {
    // let newCourse = new Course({name:req.body.name });
    console.log(req.body);
    try {


        const newCourse = new Course({ ...req.body });
        await newCourse.save();//כך יתווסף לתוך המסד
        //האובייקט קיבל את הקוד עוד לפני שנשמר במסד ולכן לא צריך לקבל את הערך של מה שחוזר מהפונקציה שמירה


        return res.send(newCourse).status(200);
    }
    catch (e) {
        return res.status(400).send(e.message)
    }
})
router.put("/:id", async (req, res) => {

    const id = req.params.id;
    try {
        //אפשר לעדכן ישירות במסד נתונים
        // await Course.update({ "_id": id }, { $set: { name: req.body.name } });

        // await Course.update({ "_id": id }, { $set: { name: req.body.name } }, { new: true });//יחזיר את האובייקט כאובייקט חדש אחרי השינוי

        //נוכל לעדכן גם על ידי שליםה ורק אח"כ שינוי ושמירה

        let course = await Course.findOne({ "_id": id });
        if (!course)
            return res.status(404).send("sorry no such course!!!");
        course.name = req.body.name;
        course.price = req.body.price;

        // course.set({
        //     name: req.body.name,
        //     price: req.body.price
        // })בדיוק כמו 2 שורות קודמות
        course = await course.save();
        return res.send(course).status(200);
    }
    catch (e) {
        return res.status(400).send(e.message)
    }
})
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    // const course = Course.deleteOne({ "_id": id });
    const course = await Course.findOneAndDelete({ "_id": id });
    if (!course)
        return res.status(404).send("sorry no such course");


    return res.send(course).status();
})

module.exports = router;


// לא צריך לציין id
//כי אוטומטי לכל אובייקט מתווסף השדה הזה
