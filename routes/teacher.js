/*const express = require("express");
const router = express.Router();

const teachers = [
    { id: 1, name: "rina", age: 35, sall: [4500, 2000, 7000] },
    { id: 2, name: "mona", age: 25, sall: [4500, 2002, 7000] },
    { id: 3, name: "dina", age: 55, sall: [10000, 1000, 1700] },
];
router.get("/", (req, res) => {
    return res.send(teachers).status(200);
})
router.get("/:id",async (req, res) => {
    const id = req.params.id;
    let teacher = teachers.find((item) => item.id == id);
    if (!teacher)
        return res.status(404).send("sorry no such teacher");
    return res.send(teacher);
})
router.post("/", (req, res) => {
    teachers.push(req.body);
    console.log(req.body);
    return res.send(teachers[teachers.length - 1]).status(200);
})
router.put("/:id", (req, res) => {
    const id = req.params.id;
    let teacher = teachers.find((item) => item.id == id);
    if (!teacher)
        return res.status(404).send("sorry no such teacher!!!");
    teacher.name = req.body.name;
    teacher.age = req.body.age;
    return res.send(teacher).status(200);
})
router.delete("/:id", (req, res) => {
    const id = +req.params.id;
    let index = teachers.findIndex(item => item.id === id);
    if (index == -1)
        return res.status(404).send("sorry no such teacher");
    let t = teachers[index];
    teachers.splice(index,1);
    return res.send(t).status(200);
})

module.exports = router;*/
