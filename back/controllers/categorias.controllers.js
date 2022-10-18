const mysql = require( 'mysql' );
const config = require('../config/config');

const getConnection = require('../config/config');

async function getCategorias(req,res){
   const connection = await getConnection();
   const result=await connection.query("SELECT * FROM categorias");
   console.log(result);
   res.json(result);

};

module.exports = {
  getCategorias,
};


/* class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
      
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query(sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
} */