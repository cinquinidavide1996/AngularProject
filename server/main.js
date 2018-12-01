var order = [];
var data = {
    products: [{
            'Antipasti': [{
                    ID: 1,
                    name: 'Insalata',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }, {
                    ID: 2,
                    name: 'altro',
                    price: '10,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }]
        }, {
            'Primo di Pesce': [
                {
                    ID: 3,
                    name: 'Spaghetti alla Scoglio',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }, {
                    ID: 4,
                    name: 'Spaghetti Bottarga',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }
            ],
            'Primi di Carne': [{
                    ID: 5,
                    name: 'Spaghetti Rag�',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }, {
                    ID: 6,
                    name: 'Spaghetti Rag� di Cinghiale',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }
            ]
        }, {}, {
            'Vini': [{
                    ID: 7,
                    name: 'Vino n�1',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }, {
                    ID: 8,
                    name: 'Altro Vino',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }, {
                    ID: 9,
                    name: 'Rosso',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }

            ],
            'Birre': [
                {
                    ID: 10,
                    name: 'Moretti',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                },
                {
                    ID: 11,
                    name: 'Peroni',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                },
                {
                    ID: 12,
                    name: 'Nastro Azzurro',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }
            ],
            'Bibite': [
                {
                    ID: 13,
                    name: 'Coca Cola',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                },
                {
                    ID: 14,
                    name: 'Fanta',
                    price: '3,20�',
                    description: '',
                    img: 'assets/void.png',
                    time: '10m'
                }
            ]
        }, {}]
};

var express = require('express');
var mysql = require('mysql');
var app = express();

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
    var sql = ""
            + " SELECT "
            + "     ID, "
            + "     title, "
            + "     description, "
            + "     imgpath, "
            + "     isActive "
            + " FROM category "
            + " WHERE isActive = 1 ";
    
    con.query(sql, function (err, result, field) {
        res = setHeader(res);
        res.send(result);
    });
});

app.get('/menu/:CategoryID', function (req, res) {
    res = setHeader(res);
    res.send(data.products[req.params.CategoryID]);
});

//app.post('/menu/:ProductID', function(req, res) {
//    res = setHeader(res);
//    for (var i in data.products) {
//        for (var d in i) {
//            console.log(d);
//            if (d.ID === req.params.ProductID) {
//                order.push(d);
//            }
//        }
//    }
//    
//    
//    res.send(order);
//});

app.listen(8080);



function setHeader(r) {
    r.setHeader('Content-Type', 'application/json');
    r.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    return r;
}
;