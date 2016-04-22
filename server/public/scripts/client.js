var app = angular.module('princeApp', []);

app.controller('SubmissionController', ['$http', function($http){
  var submission = this;

  submission.song = '';
  submission.showBuscemi = true;

  submission.sendSong = function(){
    console.log(submission.song);
    submission.showBuscemi = true;
    var sendData = {};

    sendData.name = submission.song;

    $http.post('/song/add', sendData).then(function(response){
      console.log(response);
      if(response.status == 200){

      }
    }, function(response){
      if(response.status == 404){
        console.log('Not found');
      } else if (response.status == 500){
        console.log('Error submitting your song');
      }
    })


  }



}]);
