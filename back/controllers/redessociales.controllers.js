const mysql = require( 'mysql' );
const { Sequelize } = require('sequelize');

const config = require('../config/config');


const getConnection = require('../config/config'); //ESTA BIEN ESTA LINEA PARA REALIZAR LA CONEXION ??
const { sequelize } = require('../models');

async function getCategorias(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("SELECT * FROM `redes_sociales`", { type: QueryTypes.SELECT });
    console.log(result);
    res.json(result); 
};

async function deleteCategorias(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("DELETE FROM `redes_sociales` WHERE `id_redes_sociales` = 2", { type: QueryTypes.DELETE });
    console.log(result);
    res.json(result); 
};

async function updateCategorias(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("UPDATE redes_sociales SET `Red_social` = 'Facebook' WHERE `id_red_social`= 2", { type: QueryTypes.UPDATE });
    console.log(result);
    res.json(result); 
};

async function insertCategorias(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("INSERT INTO redes_sociales(`Red_social`) VALUES('Instagram')", { type: QueryTypes.UPDATE });
    console.log(result);
    res.json(result); 
};


async function findAllCategorias(req,res){
// Find all users
const categorias = await categoria.findAll(); //CATEGORIA NO TOMA LA FUNCCION DE SEQUALIZE
console.log(categorias.every(user => user instanceof categoria)); // true
console.log("Todas las Categorias:", JSON.stringify(categorias, null, 2)); 
 };



module.exports = {
  getCategorias,
  insertCategorias,
  deleteCategorias,
  updateCategorias,

  findAllCategorias,
};

