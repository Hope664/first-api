

const express = require("express");
const router= express.Router();
const db = require("../db");
/**
 * @swagger
 * tags:
 * name: Students
 * description:API for students management
 */

/**
 * @swagger
 * /students:
 * get:
 * summary: Get all students
 * tags:[Students]
 * responses:
 * 200:
 * description:List of students`
 */
router.get("/",(req,res)=>{
    db.query("SELECT*FROM students",(err,result)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        res.json(results);
    });
});
module.exports = router;