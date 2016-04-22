var express = require('express');
var Song = require('../../models/songObj');
var router = express.Router();

router.post('/add', function(request, response){
  console.log(request.body);

  // var createdSong = new Song(request.body);
  //
  // createdSong.save(function(err){
  //   if(err){
  //     console.err(err);
  //     response.sendStatus(500);
  //   }
  // });

  Song.create(request.body, function(err, newSong){
    if(err){
      console.log(err);
      response.sendStatus(500);
    }

    //here

  })


  response.sendStatus(200);

  // response.send('Anything');


})

module.exports = router;
