require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
//middlewares
app.use(bodyParser.json())

const { dbConnection } = require('./config/db');
app.listen( process.env.PORT, ()=>{
    console.log(`\x1b[34m ***************************************************
** se levanta mi API o servidor en el puerto ${process.env.PORT}** 
*************************************************** \x1b[0m`);
} )

dbConnection();

app.get('/', (req, res) => {
    res.send(`Hola estan en mi API`)
    
    console.log(`\x1b[35m ** estoy en home ** \x1b[0m`);
})


app.use('/comments', require('./routers/comments.routers'), )
app.use('/users',require('./routers/users.routers'))
app.use('/unidAdmis',require('./routers/unidAdmis.routers'))

// app.get('/books', (req, res) => {
//     res.send('estoy aqui en books');
// })