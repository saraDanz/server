const express = require("express");
const course = require("./routes/course");
const teacher = require("./routes/teacher");
const mongoose = require("mongoose");


const app = express();//מפעיל פונקציה שיוצרת ומחזירה את השרת שיוצרת
//עכשיו באפפ יהיה לנו את השרת 
app.use(express.json());//יודע לקחת את גוף הקריאה שנשלח כגייסון ולמהיר אותו לפורמט גייסון בנוד
app.use(express.urlencoded({ extended: false }));


//מכניס לתוך הreq.body את האובייקט כגייסון
// app.get("/", (req, res) => { })
// app.get("/user", (req, res) => { })
// app.get("/course", (req, res) => { })
// app.post("/user", (req, res) => { })

app.use("/teacher", teacher)
app.use("/course", course)
app.listen(3000, () => {
    console.log("listening on port 3000")
})



//npm i -g nodemon 
//מלשון נוד מוניטור
//מריץ מחדש כל פעם כשיש שינוי בשרת

//npm i --save mongoose--ספריה להתחברות למונגו 
