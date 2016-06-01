var restify = require('restify');
var beer = require('beer-names');
var Chance = require('chance');

var chance = new Chance();
var server = restify.createServer({
  name: 'Beers',
});

server.get('/', function(req, res, next){
    res.send(generateBeers(10));
});

server.get('/:NB', function(req, res, next){
    res.send(generateBeers(parseInt(req.params.NB)));
});

server.listen(80);

function generateBeers(nb) {
    var beerList = [];
    for (var i = 0; i < nb; i++) {
        beerList.push({
            name: beer.random(),
            abv: chance.integer({min: 4, max: 10}) + '%',
            style: chance.pick(['Amber', 'Blonde', 'Brown', 'India Pale Ale', 'Red', 'Black']),
            country: chance.country({ full: true })
        });
    }

    return beerList;
}
