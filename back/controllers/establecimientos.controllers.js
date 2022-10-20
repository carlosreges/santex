const mysql = require( 'mysql' );
const { Sequelize } = require('sequelize');


const config = require('../config/config');


const getConnection = require('../config/config'); //ESTA BIEN ESTA LINEA PARA REALIZAR LA CONEXION ??
const establecimiento = require('../models').establecimientos;

async function getEstablecimientos(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await establecimiento.findAll();
    /* const result = await sequelize.query("SELECT * FROM `redes_sociales`", { type: QueryTypes.SELECT }); */
    console.log(result);
    res.json(result); 
};

async function deleteEstablecimeintos(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await establecimiento.destroy({ where: { id_establecimientos: req.params.id } })
    /* const result = await sequelize.query("DELETE FROM `redes_sociales` WHERE `id_redes_sociales` = 2", { type: QueryTypes.DELETE }); */
    console.log(result);
    res.json(result); 
};

/* async function updateCategorias(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await sequelize.query("UPDATE redes_sociales SET `Red_social` = 'Facebook' WHERE `id_red_social`= 2", { type: QueryTypes.UPDATE });
    console.log(result);
    res.json(result); 
}; */

async function insertEstablecimientos(req,res){
    const { QueryTypes } = require('sequelize');
    let result = await establecimiento.create(req.body) 
    /* const result = await sequelize.query("INSERT INTO redes_sociales(`Red_social`) VALUES('Instagram')", { type: QueryTypes.UPDATE }); */
    console.log(result);
    res.json(result); 
};

async function buscarPorTitulo(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await establecimiento.findOne({where:{ Titulo: req.params.nombre }});
    /* const result = await sequelize.query("SELECT * FROM `redes_sociales`", { type: QueryTypes.SELECT }); */
    console.log(result);
    res.json(result); 
};


module.exports = {
  getEstablecimientos,
  insertEstablecimientos,
  deleteEstablecimeintos,
  buscarPorTitulo,
  /* updateCategorias, */

};

