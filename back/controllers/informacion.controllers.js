const mysql = require( 'mysql' );
const { Sequelize } = require('sequelize');

const config = require('../config/config');


const getConnection = require('../config/config'); //ESTA BIEN ESTA LINEA PARA REALIZAR LA CONEXION ??
const { sequelize } = require('../models');

async function getInformacion(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("SELECT * FROM `informacion`", { type: QueryTypes.SELECT });
    console.log(result);
    res.json(result); 
};

async function deleteInformacion(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("DELETE FROM `informacion` WHERE `id_informacion` = 3", { type: QueryTypes.DELETE });
    console.log(result);
    res.json(result); 
};

async function updateInformacion(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("UPDATE informacion SET `Direccion` = 'Av. San Martin' WHERE `id_informacion`= 2", { type: QueryTypes.UPDATE });
    console.log(result);
    res.json(result); 
};

async function insertInformacion(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("INSERT INTO informacion (`Direccion`,`Horario`,`Telefono`,`Email`,`Logo`) VALUES('Av. Colon 195 - PA 01', 'Lunes a Viernes | 08:30 a 12:00hs','3516175809','cbalucas@hotmail.com','')", { type: QueryTypes.UPDATE });
    console.log(result);
    res.json(result); 
};


async function findAllInformacion(req,res){
// Find all users
const categorias = await categoria.findAll(); //CATEGORIA NO TOMA LA FUNCCION DE SEQUALIZE
console.log(categorias.every(user => user instanceof categoria)); // true
console.log("Todas las Categorias:", JSON.stringify(categorias, null, 2)); 
 };



module.exports = {
  getInformacion,
  insertInformacion,
  deleteInformacion,
  updateInformacion,

  findAllInformacion,
};

