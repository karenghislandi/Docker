const express=require("express");
const app=express();
const cors =require("cors")
const upload=require("./middleware/uploadImg");
const bodyParser=require("body-parser")

//const db=require("./models/db")

const Image =require("./models/Imagens");

app.get("/lista_imagens",async(req,res)=>{
    await Image.findAll()
    .then((images)=>{
        return res.json({
            erro:false,
            images
        })

    }).catch(()=>{
        return res.status(400).json({
            erro:true,
            mensagem:"erro: nenhum dado encontrado!"
        })

    })
})


app.post("/estabelecimento", upload.single("image"),async(req,res)=>{

    if(req.file){
        console.log(req.file)

        await Image.create({ nomeImg:req.body.nomeImg,image: req.file.filename})
        .then(()=>{
            return res.json({
                mensagem: "upload realizado com sucesso!"
            });

        }).catch(()=>{
            return res.status(400).json({
                mensagem: "upload  não realizado ! "
            });

        });
    }
    return res.status(400).json({
        mensagem: "upload  não realizado com sucesso!Necessario enviar arquivo PNG,JPEG,JPG "
    });
     
})

/*app.put("/imagens/:id",async(req,res)=>{
    await Image.fin
    .then((images)=>{
        return res.json({
            erro:false,
            images
        })
    }).catch(()=>{
        return res.status(400).json({
            erro:true,
            mensagem:"erro: nenhum dado encontrado!"
        })

    })
})*/



app.listen(8080, ()=>{
   console.log("Servidor iniciado na porta 8080: http://localhost:8080");
     
})