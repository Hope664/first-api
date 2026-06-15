const express = require("express");
const app = express();
 const PORT = 3002;
 connectmysql2();
 app.use(express.json());
 app.use(express.static('public'));

 const studentsRoutes = require("./routes/students");
app.use("/students",studentsRoutes);

const swaggerui = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
 const swaggerOptions = {
    swaggerDefinition:{
        openapi:"3.0.0",
        Info:{
            title:"students API",
            version:"1.0.0",
            description:"API to manage students",
        },
        servers:[{
            url:"http://localhost:3002",
        },
    ],
    },
    apis:["./routes/*.js"],
 };
 const swaggerDocs = swaggerJsDoc(swaggerOptions);
 app.use("/api-docs",swaggerui.serve, swaggerui.setup(swaggerDocs));

 
app.get("/",(req,res)=>{
res.send("API is running on port 6000")
});
app.listen(PORT,()=>{
    console.log(`API is running on ${PORT}`);
    console.log(`Swagger UI available on http://localhost:${PORT}/api-docs`);
});