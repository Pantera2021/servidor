import express from 'express';
const router = express.Router();

//importar el model nota
import biciBD from '../models/biciBD';
import eventosBiciBD from '../models/eventosBiciBD';

//agregar usuario

router.post('/nuevo-registro', async(req, res)=>{
    const body = req.body;
    try
    {
        const biciDB = await biciBD.create(body);
        res.status(200).json(biciDB);
    }
    catch (error)
    {
        return res.status(500).json(
        {
            mensaje:'Ocurrio algo inesperado',
            error,
        })
    }
});

//agregar evento

router.post('/nuevo-evento', async(req, res)=>{
    const body = req.body;
    try
    {
        const eventoBiciDB = await eventosBiciBD.create(body);
        res.status(200).json(eventoBiciDB);
    }
    catch (error)
    {
        return res.status(500).json(
        {
            mensaje:'Ocurrio algo inesperado',
            error,
        })
    }
});


//Get Usuario
router.get("/buscar-todo", async(req,res)=>{    
    try
    {
        const biciDB = await biciBD.find();
        res.json(biciDB);
    }
    catch(error)
    {
        return res.status(400).json(
            {
                mensaje: "error en la busqueda",
                error
            }
        )
    }
});

//Get con parametro Usuario
router.get("/buscar-usuario/:id", async(req,res)=>{
    const _id = req.params.id;
    try
    {
        const biciDB = await biciBD.find({_id});
        res.json(biciDB);
    }
    catch (error)
    {
        return res.status(400).json(
            {
                mensaje: "error en la busqueda de usuario",
                error
            }
        )
    }
});

//Delete con parametro Usuario
router.delete("/eliminar-usuario/:id", async(req,res)=>{
    const _id = req.params.id;
    try
    {
        const biciDB = await biciBD.findByIdAndDelete({_id});
        if(!biciDB)
            {
                return res.status(400).json(
                    {
                        mensaje: "usuario no existe",
                        error
                    })
            } res.json(biciDB)
    }
    catch (error)
    {
        return res.status(400).json(
            {
                mensaje: "error al eliminar usuario",
                error
            }
        )
    }
});



//Update con parametro Usuario
router.put("/actualizar-usuario/:id", async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;
    try
    {
        const biciDB = await biciBD.findByIdAndUpdate(_id,body,{new:true});
        if(!biciDB)
            {
                return res.status(400).json(
                    {
                        mensaje: "usuario no existe",
                        error
                    })
            }
            
            res.json(biciDB)
    }
    catch (error)
    {
        return res.status(400).json(
            {
                mensaje: "error al actualizar usuario",
                error
            }
        )
    }
});

router.post('/login', async(req, res) => {

    let body = req.body;
  
    try {
      // Buscamos email en DB
      const biciDB = await biciBD.findOne({email: body.email});
  
      // Evaluamos si existe el usuario en DB
      if(!biciDB){
        return res.status(400).json({
          mensaje: 'Usuario! o contraseña inválidos',
        });
      }
  
      // Evaluamos la contraseña correcta
      if( !bcrypt.compareSync(body.pass, biciDB.pass) ){
        return res.status(400).json({
          mensaje: 'Usuario o contraseña! inválidos',
        });
      }
  
      // Pasó las validaciones
      return res.json({
        usuarioDB,
        token: 'fkajsdkf'
      })
      
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      });
    }  
});

//Exportar la configuración de express
module.exports=router;
