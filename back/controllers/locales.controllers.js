const mysql = require( 'mysql' );
const { Sequelize } = require('sequelize');


const config = require('../config/config');


const getConnection = require('../config/config'); //ESTA BIEN ESTA LINEA PARA REALIZAR LA CONEXION ??
const locales = require('../models').locales;

async function getLocales(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await locales.findAll();
    /* const result = await sequelize.query("SELECT * FROM `redes_sociales`", { type: QueryTypes.SELECT }); */
    console.log(result);
    res.json(result); 
};

async function deleteLocales(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await locales.destroy({ where: { id_locales: req.params.id } })
    /* const result = await sequelize.query("DELETE FROM `redes_sociales` WHERE `id_redes_sociales` = 2", { type: QueryTypes.DELETE }); */
    console.log(result);
    res.json(result); 
};


async function insertLocales(req,res){
    const { QueryTypes } = require('sequelize');
    let result = await locales.create(req.body) 
    /* const result = await sequelize.query("INSERT INTO redes_sociales(`Red_social`) VALUES('Instagram')", { type: QueryTypes.UPDATE }); */
    console.log(result);
    res.json(result); 
};

async function buscarPorTitulo(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await locales.findOne({where:{ Titulo: req.params.titulo }});
    
    /* const result = await sequelize.query("SELECT * FROM `redes_sociales`", { type: QueryTypes.SELECT }); */
    console.log(result);
 
    res.json(result); 
};

async function buscarPorId(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await locales.findOne({where:{ id_local: req.params.id }});
    /* const result = await sequelize.query("SELECT * FROM `redes_sociales`", { type: QueryTypes.SELECT }); */
    console.log(result);
    res.json(result); 
};

async function buscarPorCategoria(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await locales.findAll({where:{ Categoria: req.params.categoria}});

   
    res.json(result); 
};

module.exports = {
  getLocales,
  insertLocales,
  deleteLocales,
  buscarPorTitulo,
 buscarPorId,
 buscarPorCategoria,

};

