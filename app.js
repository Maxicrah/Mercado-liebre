//requerimientos de modulos

const express = require("express");
const app = express();
const path = require("path");

const PUERTO=3030;


app.listen( PUERTO ,()=> console.log("Server up 3030")  );

app.get("/",(req,res)=>{

        res.sendFile(path.join(__dirname,"./src/views/home.html"));

})

app.get("/register",(req,res)=>{

    res.sendFile(path.join(__dirname,"./src/views/register.html"));

})

app.get("/login",(req,res)=>{

    res.sendFile(path.join(__dirname,"./src/views/login.html"));

})

// Manejo del formulario de login
app.post("/login", (req, res) => {
    // Aquí se puede realizar la autenticación y el manejo de los datos del formulario.
    // Por simplicidad, solo haremos una redirección al inicio después de procesar el formulario.
    res.redirect("/");
});

app.post("/register", (req, res) => {
    // Aquí se puede realizar la autenticación y el manejo de los datos del formulario.
    // Por simplicidad, solo haremos una redirección al inicio después de procesar el formulario.
    res.redirect("/");
});



app.use(express.static('public'));