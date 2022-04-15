var pg = require('pg');

const connectionString = "postgres://d8h94rq9ds518t:0d99e34438ea8c15e2ebbd1af7dc272773a28c914271872dab574eeb169181c1@ec2-3-248-121-12.eu-west-1.compute.amazonaws.com:5432/cfnltzahxgvckj"
const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
})

module.exports = pool;