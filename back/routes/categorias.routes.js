const getConnection = require('../config/config');


const getCategorias = async(req,res)=>{
   const connection = await getConnection();
   const result=await connection.query("SELECT * FROM categorias");
   console.log(result);
   res.json(result);

}
const postCategorias =  async (req,res) => {
    const connection = await getConnection();
    const result=await connection.query("INSERT INTO categorias(`id_Categorias`,`Categoria`) VALUES(7,'primera')");
    console.log(result);
    res.json(result);

}

/* export const methods = {
    getCategorias,
    postCategorias
}; */
module.exports = {
  getCategorias,
  postCategorias
};