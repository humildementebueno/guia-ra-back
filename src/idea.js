const express = require("express");
const app = express();
const port = 3000;

let db_UnidadesAdministrativas = [
    {
        "_id": "615a468824b6a9d8d83f094f",
        "nombre": "Unidad Administrativa 1",
        "descripcion": "Descripción de la unidad administrativa 1",
        "ubicacion": {
          "latitud": 123.456789,
          "longitud": -98.765432
        }
    }      
]
let db_Usuario = [
    {
        "_id": "615a468824b6a9d8d83f0950",
        "nombre": "John Doe",
        "correo": "johndoe@example.com",
        "contrasena": "hashed_password"
    }          
]
let db_Comentario = [
    {
        "_id": "615a468824b6a9d8d83f0951",
        "usuario_id": "615a468824b6a9d8d83f0950",
        "unidad_administrativa_id": "615a468824b6a9d8d83f094f",
        "comentario": "Excelente servicio. El personal es muy amable.",
        "calificacion": 5,
        "fecha": "2021-10-04T09:30:00Z"
    }           
]

app.listen(
    port ,() => {
        console.log('Servidor activado en el puerto ' + port );
    }
)

app.get("/unidadesAdmi" , (req,res)=>{
    console.log("consumo mi enpoit get");
    // res.send('metodo get')
    res.json(db_UnidadesAdministrativas);
})
app.get("/usuarios" , (req,res)=>{
    console.log("consumo mi enpoit get");
    // res.send('metodo get')
    res.json(db_Usuario);
})
app.get("/comentarios" , (req,res)=>{
    console.log("consumo mi enpoit get");
    // res.send('metodo get')
    res.json(db_Comentario);
})