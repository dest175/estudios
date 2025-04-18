import express from 'express';
import sequelize from './src/db/db.js';
import './src/model/subscripcion.js';
import router from './src/routes/subcripcionRoute.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`se escucho en el puerto ${PORT}`)
    sequelize.authenticate();
    sequelize.sync();
    console.log("la base se coneceto")
});

app.use(router);
