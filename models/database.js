var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://ben:123456@localhost:5432/copy-server';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY,name VARCHAR(40) not null, admin BOOLEAN, password_hash VARCHAR(40));');

