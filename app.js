// console.log(1232);
const express = require("express")
const mysql = require("mysql")

let app = express()
// 建立链接池
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'mytry',
    connectionLimit: '15'
})

app.listen(8020);

app.get('/index', (req, res) => {
    pool.query('SELECT * FROM firsttable', (err, result) => {
        if (err) {
            res.send({
                code: 400,
                message: "数据库链接失败",
            })
            return;
        }
        res.send({
            code: 200,
            message: '数据库获取成功',
            data: {
                result
            }
        })
    })
})