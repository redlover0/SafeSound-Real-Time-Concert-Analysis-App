import pg from "pg";

const {Pool} = pg;

const pool = new Pool();

export const query = (text, params, callback) => {
console.log('executed query', text);
return pool.query(text, params, callback);
}






