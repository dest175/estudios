import router from './src/routes/conversacion.js';
import routerMensaje from './src/routes/mensaje.js';
import './src/models/mensaje.js';
import './src/models/conversacion.js';
import express from 'express';
import sequelize from './src/db/db.js';
import routerUsuario from './src/routes/usuario.js'


const app = express();
const PORT = 3000;
app.use(express.json())

app.listen(PORT,()=>{
    console.log('se escucho en el ', PORT)
    sequelize.authenticate()
    sequelize.sync()

    console.log('la base de datos se conecto')
})

app.use(router)
app.use(routerMensaje)
app.use(routerUsuario);