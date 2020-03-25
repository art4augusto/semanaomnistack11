/**Funções 
 * console.log() mostra dentro do terminal oque você está requisitando
 * npm start pra iniciar o back-end
 */
/**
 *  Rota/ Recurso
 */

/**
 *  Metodos HTTP
 * 
 * GET: BUSCAR/LISTAR UMA INFORAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFO. NO BACK-END
 * DELETE: DELETAR UMA INFO NO BACK-END
 */
/**
 *  Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * -para acessar o query dentro da rota se usa "const params = request.query"
 * Route Params: Parâmetos utilizados para identificar recursos
 * -para acessar o route dentro da rota se usa "const params = request.params"
 * -quando colocar o id para usar o route precisa ter "/:id"
 * Request Body: è o corpo da requisição, utilizado para criar ou alterar recursos
 * -para acessar o body dentro da rota se usa "const body = request.body"
 */
/**
 * Banco de Dados 
 * 
 * SQL: MySQL , SQLite, PostgreSQL, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
