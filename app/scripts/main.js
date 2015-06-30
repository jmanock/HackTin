$(document).ready(function(){
  $.getJSON('scripts/hacks.json', function(data){
    $.each(data, function(key, val){
      // Tinder photo hack
      for(var i = 0; i<val.length; i++){
        for(var x = 0; x<val[i].photos.length; x++){
          //$('body').append($('<img src=' + val[i].photos[x].url + '</img>'));
          $('div').append($('<li >' + val[i].name +
          '<img src =' + val[i].photos[x].url + ' height="100" width="100"></img>' + '</li>'));

        }

      }

      // Instagram hack
  //     for(var i = 0; i< val.length; i++){
  //       var insta = val[i].instagram;
  //       var nme = val[i].name;
  //       if(insta === null || insta === undefined){
  //         console.log('nothing here');
  //       }else{
  //         for(var x = 0; x<insta.photos.length; x++){
  //              $('body').append($('<img src=' + insta.photos[x].image + '></img>'));
  //             //console.log(insta.photos[x].image);
  //         }
  //
  //       }
  //     }


     });
   });
});
