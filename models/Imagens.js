const Sequelize=require('sequelize')
const db =require("./db")

const Image=db.define('imagens',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeImg:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
//criar tabela
Image.sync()

module.exports=Image