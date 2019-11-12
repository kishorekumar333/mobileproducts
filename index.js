var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('welcome to mobileproducts');
})
app.get('/products', function(request, response){
    var products = [
        {
            id: 1,
            name: 'Nokia',
            price: '25000',
            instock: true
        },
        {
            id: 2,
            name: 'Redmi',
            price: '26000',
            instock: true 
        },
        {
            id: 3,
            name: 'samsung',
            price: '28000',
            instock: true 
        },
        {
            id: 4,
            name: 'Iphone',
            price: '20000',
            instock: true 
        },
    ];
    response.send(products);
})
app.get('/Books', function(req, res){
    var Books = [
        {
            id: 1,
            name: 'javascript',
            price: '25000',
            instock: true
        },
        {
            id: 2,
            name: 'Html',
            price: '26000',
            instock: true 
        },
        {
            id: 3,
            name: 'CSS',
            price: '28000',
            instock: true 
        },
        {
            id: 4,
            name: 'EXPRESS.js',
            price: '20000',
            instock: true 
        },
    ];
    res.json(Books);
    res.status(200);
})
app.listen(3000, function(){
    console.log('server running on 3000 port')
})