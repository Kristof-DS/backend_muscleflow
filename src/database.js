/*import postgres from 'postgres'

const sql = postgres({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    max: 20,
    idle_timeout: 30000,
    connect_timeout: 2000
})

export default sql

*/

import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`;

const sql = postgres(connectionString, {
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false, // Enable SSL for Heroku
    max: 20,
    idle_timeout: 30000,
    connect_timeout: 2000,
});

export default sql;
