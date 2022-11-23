const db = require('./db');

function getAll(callback){
    const sql = "SELECT id, name, email, age, country FROM finu.customers2";
    db.executeQuery(sql, [], callback);
}

function addOne(name, email, age, country, callback){
    const sql = "INSERT into finu.customers2 (name, email, age, country) VALUES (?, ?, ?, ?)";
    db.executeQuery(sql, [name,email, age, country], callback);
}

module.exports.getAll = getAll;
module.exports.addOne = addOne;