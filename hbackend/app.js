import express from 'express'
import "./model.js"
import "./itirenario.js"
import sequelize from './db.js';
import Itinerario from './itirenario.js'; 
import Solicitudes from './Solicitudes.js';
import router from './routes/solicitudroutes.js';
import routerItinerario from './routes/itinerarioRoutes.js';

const app = express()
const port= 3000;
app.use(express.json())
app.get('/',(req , res) => {
    res.send('empezo en el puerto 3000 en express')
    console.log(router());
})
app.listen(port,()=>{
    console.log('se escucho en el ', port)
    sequelize.authenticate()
    sequelize.sync()

    console.log('la base de datos se conecto')
})

app.get('/problema1',(req , res) => {
    console.log("se conecto neil pa ver el problema1")
    //345 en 55 dias , cuantos recorro en 23
    const km = 345 / 55 * 23;
    res.send(`la respuesta es ... ${km}`)

})

app.post('/tarea1', async (req,res) => {
    const newitinerario = await Itinerario.create({
         id_Itinerario: "3" ,
            name: "jose",
            description: "el q te programo y se fue",
            id : 3,
            dificultad: 23,
            categoria: "especial"
        
    })
    console.log(" ek itinerario se creo", newitinerario)
    res.json({
        mensaje: "se logro",
        newitinerario
    })
});

app.post("/tareabackend1", async (req,res) => {
    console.log("haciendo la tarea desde postman/backend");
    const data = req.body;
    const newitinerario2 = await Itinerario.create(data)
    res.json({mensaje: "terea realizada cn exito ", newitinerario2})
})
 app.post("/tareabackend2", async (req,res)=> {
    console.log("sirvio el otro metodo")
    const data = req.body
    const newitinerario3 = await Itinerario.create({
        id_Itinerario : data.id_Itinerario,
        nombre: data.name,
        description: data.description,
        dificultad: data.dificultad,
        categoria: data.categoria
    })
    res.json({mensaje : "la tarea se creo", newitinerario3})

 })
 app.get("/itinerarioGet", async (req,res)=>{
    const data = await Itinerario.findAll();
    res.json({mensaje:"se han enviado una lista de itinerarios",data});
 });

 app.get("/itinerarioid", async(req,res)=>{
    const id = req.body.id;
    const data= await Itinerario.findByPk(id);
    res.json({mensaje:"eltinerario fue encontrado por medio del id:",data})
 });
 app.get("/itinerario/:id",async (req,res)=>{
    const id = req.params.id;
    const data = await Itinerario.findByPk(id);
    res.json({mensaje:"encontramos el itinerario por el otro metodo y por el id ", data})
 })
 app.put("/itinerario/:id",async (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const findItinerario= await Itinerario.findByPk(id);
    const itinerarioUpdate = findItinerario;
    for (const partespeks in body){
        itinerarioUpdate[partespeks] = body[partespeks]
    }
    const itinerarioToUpdate = itinerarioUpdate.save()
    res.json({mensaje:`el itinerario mediante el id num : ${id}, se actualizo el dato `,body})
 });

 //metodo post
 app.post('/Solicitudes', async (req,res) => {
    const newSolicitudes = await Solicitudes.create({
         id_Solicitudes: 1,
             prioridad: "Baja",
             description : "una solicitud de tarea",
             solicitud : "kiero un poncho",
             tlf : 42411556998,
             identificacion :  654654656,
             direccion : "hello jelou"
         
    })
    console.log(" ek itinerario se creo", newSolicitudes)
    res.json({
        mensaje: "se logro",
        newSolicitudes
    })
});
//metodo post 2

//metodo post 3
app.post("/solicitud2", async (req,res)=> {
    console.log("sirvio el otro metodo")
    const data = req.body
    const newSolicitudes = await Solicitudes.create({
        id_Solicitudes: data.id_Solicitudes,
             prioridad: data.prioridad,
             description : data.description,
             solicitud : data.solicitud,
             tlf : data.tlf,
             identificacion :  data.identificacion,
             direccion : data.direccion
    })
    res.json({mensaje : "la solicitud se creo", newSolicitudes})

 })
// metodo GET

app.get("/solicitudGET", async (req,res)=>{
    const data = await Solicitudes.findAll();
    res.json({mensaje:"se han enviado una lista de solicitudes",data});
 });

 app.get("/solicitudGET2", async(req,res)=>{
    const id = req.body.id_Solicitudes;
    const data= await Solicitudes.findByPk(id);
    res.json({mensaje:"la solicitud  fue encontrada por medio del id:",data})
 });
app.get("/solicitud/:id",async (req,res)=>{
    const id = req.params.id;
    const data = await Solicitudes.findByPk(id);
    res.json({mensaje:"encontramos la solicitud por el otro metodo y por el id ", data})
 }) 
//metodo put

app.put("/solicitud/:id",async (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const findSolicitud= await Solicitudes.findByPk(id);
    const SolicitudUpdate = findSolicitud;
    for (const partespeks in body){
        SolicitudUpdate[partespeks] = body[partespeks]
    }
    const solicitudToUpdate = SolicitudUpdate.save()
    res.json({mensaje:`la solicitud fue encontrada mediante el id num : ${id}, se actualizo el dato `,body})
 });
 app.get("/error", (req, res, next) => {
    res.status(404).send('Lo sentimos, la página que buscas no fue encontrada.');
});



app.use(router);
app.use(routerItinerario)
//utilizar los itinerarios para construir unnuevo flujo :D