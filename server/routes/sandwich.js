var express = require('express');
var router = express.Router();

router.get('/*', function(request, response, next){
  console.log('Request made', new Date());
  next();
})

router.get('/', function(request, response){
  response.send('Received request at /sandwich');
});

router.get('/bananas', function(request, response){
  response.send('Received request at /sandwich/bananas');
});

router.get('/make/:numberOfSamiches?/:numBananas?/:toasted?', function(request, response){
  console.log('Received param of ', request.params.numberOfSamiches);

  if(request.params.toasted == 'true'){
    console.log('server made toasted sandwich with', request.params.numBananas, 'bananas');
  } else {
    console.log('server made sandwich with', request.params.numBananas, 'bananas');
  }

  console.log('Server made', request.params.numberOfSamiches, 'sandwiches');
})

module.exports = router;
