const pgp = require("pg-promise")();
require("dotenv").config();
// config object to grab all our environment vars for postgres
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
}
// invoke PG-promise with our connection object

const db = pgp(cn);


module.exports = db;