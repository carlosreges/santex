const mysql = require( 'mysql' );
const { Sequelize } = require('sequelize');

const config = require('../config/config');


const getConnection = require('../config/config'); //ESTA BIEN ESTA LINEA PARA REALIZAR LA CONEXION ??
const categorias = require('../models').categorias;

async function getCategorias(req,res){
    const { QueryTypes } = require('sequelize');
    // const result = await categorias.find("SELECT * FROM `categorias`", { type: QueryTypes.SELECT });
    const result = await categorias.findAll();
    console.log(result);
    res.json(result); 
};

async function deleteCategorias(req,res){
    const { QueryTypes } = require('sequelize');
    let result = await categorias.destroy({ where: { id_categorias: req } })
    // const result = await categorias.find("DELETE FROM `categorias` WHERE `id_categorias` = 1", { type: QueryTypes.DELETE });
    console.log(result);
    res.json(result); 
};

// async function updateCategorias(req,res){
//     const { QueryTypes } = require('sequelize');
//     const result = await sequelize.query("UPDATE categorias SET `Categorias` = 'Agencia de Viajes' WHERE `id_categorias`= 2", { type: QueryTypes.UPDATE });
//     console.log(result);
//     res.json(result); 
// };

// async function insertCategorias(req,res){
//     const { QueryTypes } = require('sequelize');
//     const result = await sequelize.query("INSERT INTO categorias(`Categorias`) VALUES('Atracciones')", { type: QueryTypes.UPDATE });
//     console.log(result);
//     res.json(result); 
// };


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

