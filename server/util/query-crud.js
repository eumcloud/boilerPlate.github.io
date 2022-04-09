//const db = require("./dbconn");

module.exports = {
    findOne:(table, row, value) =>{
        let sQuery = `Select * From ${table} where ${row}=${value}`;
        return new Promise((resolve, reject)=>{
            conn.query(sQuery, (err, result)=>{resolve(result)})
        })
    },
    InsertOne:(table, row, value)=>{
        return new Promise(  (resolve, reject) => {
            getConn((conn) => {
                try {
                    let sQuery = `INSERT INTO ${table}(${row}) VALUES ${value}`; 
                    conn.query(sQuery, (err, result, field) => { 
                        resolve(result[0]["id"]);
                        
                    }); 
                    conn.release();
                } catch (err) { reject(console.error(err)); }
            })
        })
    },
    UpdateOne:(table, row, value, identity) =>{
        let sQuery = `UPDATE ${table} SET ${row}=${value} `;
        return new Promise((resolve, reject)=>{
            conn.query(sQuery, (err, result)=>{resolve(result)})
        })
        
    },
    DeleteOne:(table, row, value)=>{
        let sQuery = `DELETE FROM ${table} WHERE ${row}=${value}`;
        return new Promise((resolve, reject)=>{
            conn.query(sQuery, (err, result)=>{resolve(result)})
        })
        
    }
}