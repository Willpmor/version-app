const express = require('express');
const sql = require('mssql');
const app = express();         
const bodyParser = require('body-parser');
const port = 3001; //porta padrão
const connStr = "Server=RIOSOFTDB2\\SQL2014;Database=SQL2014;User Id=versionapp;Password=Aolo@580xiM";

sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));

   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());
   
   const router = express.Router();
   router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
   
   app.use('/', router);   

   app.listen(port);
   console.log('API funcionando!');   


   router.get('/clientes', (req, res) =>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        execSQLQuery('SELECT * FROM Bases_SQL_2014', res);
  })

router.patch('/clientes/:nome', (req, res) =>{
    const nome = (req.params.nome); //req.body.Base.substring(0,150);
    const comentario = req.body.comentario.substring(0,150);
    execSQLQuery(`UPDATE Bases_SQL_2014 SET Comentario='${comentario}' where base='${nome}'`, res);
})

   
   function execSQLQuery(sqlQry, res){
       global.conn.request()
                  .query(sqlQry)
                  .then(result => res.json(result.recordset))
                  .catch(err => res.json(err));
   }   