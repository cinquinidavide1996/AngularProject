var express = require('express');
var mysql = require('mysql');
var app = express();

var qMenu = ""
        + " SELECT "
        + "     ID, "
        + "     title, "
        + "     description, "
        + "     imgpath, "
        + "     isActive "
        + " FROM category "
        + " WHERE isActive = 1 ";


var qMenuDetail = ""
        + " SELECT "
        + "     b.ID, "
        + "     b.title, "
        + "     b.price, "
        + "     b.imgPath, "
        + "     a.title AS typeTitle "
        + " FROM test.type a "
        + " JOIN test.product b ON b.TypeID = a.ID "
        + " WHERE "
        + "     a.isActive = 1 AND "
        + "     a.CategoryID = ? ";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

con.connect(function (err) {
    if (err) {
        throw err;
    }
});

app.get('/menu', function (req, res) {
    con.query(qMenu, function (e, r, f) {
        res = setHeader(res);
        res.send(r);
    });
});

app.get('/menu/:CategoryID', function (req, res) {
    var CategoryID = parseInt(req.params.CategoryID);
    con.query(qMenuDetail, CategoryID, function (e, r, f) {
        res = setHeader(res);
        response = {};

        for (var i in r) {
            var v = r[i];
            if (response[v.typeTitle] === undefined) {
                response[v.typeTitle] = [];
            }
            response[v.typeTitle].push({
                ID: v.ID,
                name: v.title,
                price: v.price,
                description: '',
                img: v.imgPath,
                time: '10m'
            });
        }

        res.send(response);
    });

});

app.listen(8080);



function setHeader(r) {
    r.setHeader('Content-Type', 'application/json');
    r.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    return r;
}
