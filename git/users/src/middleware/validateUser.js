import jwt from "jsonwebtoken"



/*export const validateData = async (req, res, next) =>{
    console.log("entrando en middleware");
    const data = req.body;
    if(
        data.email &&
        data.nombre &&
        data.direccion &&
        data.password
    ){
        console.log("todos los datos validados");
        next()
    }else{
        console.log("no se validaron");
        res.json({
            mensaje: "debes completar los campos",data,
        })
    }
};*/

const JWT_SECRET = "1234"
export const veryficationToken = async (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    jwt.verify(token, JWT_SECRET,(err,decoded)=>{
        if(err) return res.status(401).json({error:"token invalido"});
        console.log("token VALIDO, accediendo a nuestras herramientas");
        next();
    });
};