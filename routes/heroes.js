var express = require('express');
var router = express.Router();
var fs = require('fs')

let path = require('path');
let reqPath = path.join(__dirname, '../')
const heroes = JSON.parse(fs.readFileSync(reqPath + '/data/heroes.json', 'utf-8'));

/* Responiendo con heroes.json */
router.get('/', function(req, res, next) {
  res.send(heroes);
});

module.exports = router;

/* Respondiendo Heroes Detalle */

router.get('/:id', function(req, res, next) {

    if (req.params.id > heroes.length) {
        res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id');

    } else {
 
    let heroe = heroes.find(function (heroe) {
        return heroe.id == req.params.id;
      })
      res.render('heroesDetalle', { title: 'Detalles Heroes', name: heroe.nombre, profesion: heroe.profesion });
    }
  });

  /* Respondiendo Heroes Bio */

  router.get('/:id/:bio', function(req, res, next) {

    if (req.params.bio !== 'bio') {

        if (req.params.id > heroes.length) {
            res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id');

        } else {
    
        let heroe = heroes.find(function (heroe) {
            return heroe.id == req.params.id;
        })
        res.render('heroesBio', {title: 'Heroes Bio', name: heroe.nombre, resenia: heroe.resenia.split(" ", 30).join (" ")});
        }

    } else if (req.params.bio == 'bio') {
            
            if (req.params.id > heroes.length) {
                res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id');

            } else {
        
            let heroe = heroes.find(function (heroe) {
                return heroe.id == req.params.id;
            })
            res.render('heroesBio', {title: 'Heroes Bio', name: heroe.nombre, resenia: heroe.resenia });
            }
    }   

  });

  // res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');