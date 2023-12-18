const express = require("express");



const app = express();//מפעיל פונקציה שיוצרת ומחזירה את השרת שיוצרת
//עכשיו באפפ יהיה לנו את השרת 
app.use(express.json());//יודע לקחת את גוף הקריאה שנשלח כגייסון ולמהיר אותו לפורמט גייסון בנוד
app.use(express.urlencoded({ extended: false }));


//מכניס לתוך הreq.body את האובייקט כגייסון
// app.get("/", (req, res) => { })
// app.get("/user", (req, res) => { })
// app.get("/course", (req, res) => { })
// app.post("/user", (req, res) => { })

//app.use("/teacher", teacher)
//app.use("/course", course)
app.get("/course", (req,res)=>{res.json([{id:1,price:250},{id:2,price:300}])})
let port=process.env.PORT;
app.listen(port, () => {
    console.log("listening on port "+port)
})



//npm i -g nodemon 
//מלשון נוד מוניטור
//מריץ מחדש כל פעם כשיש שינוי בשרת

//npm i --save mongoose--ספריה להתחברות למונגו 
