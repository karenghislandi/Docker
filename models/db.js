const Sequelize =require("sequelize");

const sequelize= new Sequelize("uploadImg","root","",{
    host:"localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco realizado com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco não realizada!")
})

module.exports=sequelize;