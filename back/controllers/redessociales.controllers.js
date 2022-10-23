const mysql = require( 'mysql' );
const { Sequelize } = require('sequelize');


const config = require('../config/config');


const getConnection = require('../config/config'); //ESTA BIEN ESTA LINEA PARA REALIZAR LA CONEXION ??
const redes_sociales = require('../models').redes_sociales;

async function getRedesSociales(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await redes_sociales.findAll();
    /* const result = await sequelize.query("SELECT * FROM `redes_sociales`", { type: QueryTypes.SELECT }); */
    console.log(result);
    res.json(result); 
};

async function deleteRedesSociales(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await redes_sociales.destroy({ where: { Red_social: req.params.nombre } })
    /* const result = await redes_sociales.destroy({ where: { id_redes_sociales: req.params.id } }) */
    /* const result = await sequelize.query("DELETE FROM `redes_sociales` WHERE `id_redes_sociales` = 2", { type: QueryTypes.DELETE }); */
    console.log(result);
    res.json(result); 
};


async function insertRedesSociales(req,res){
    const { QueryTypes } = require('sequelize');
    let [result, create] = await redes_sociales.upsert(req.body); //SELECTOR AUTOMATICO DE INSERT O UPDATE
    /* let result = await redes_sociales.create(req.body)  */
    /* const result = await sequelize.query("INSERT INTO redes_sociales(`Red_social`) VALUES('Instagram')", { type: QueryTypes.UPDATE }); */
    console.log(result);
    res.json(result); 
};

async function buscarPorNombre(req,res){
    const { QueryTypes } = require('sequelize');
    const result = await redes_sociales.findOne({where:{ Red_social: req.params.nombre }});
    /* const result = await sequelize.query("SELECT * FROM `redes_sociales`", { type: QueryTypes.SELECT }); */
    console.log(result);
    res.json(result); 
};


module.exports = {
  getRedesSociales,
  insertRedesSociales,
  deleteRedesSociales,
  buscarPorNombre,

};

