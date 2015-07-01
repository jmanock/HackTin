
$(document).ready(function(){
  /* GOALS!!!!
    ~ on mouse over show some stats
      - name, instagram name, bio, userid?
    ~ able to click to enlarge photo
    ~ some shading that lites up on mouse over
      STREACH
      ~ maybe have an option to show all photos or image gallery
      ~ show all json photos?
    */
  $.getJSON('scripts/newTinder.json', function(data){
    $.each(data, function(k,value){
      for(var x = 0; x<value.length; x++){
        var insta = value[x].instagram;
        var name = value[x].name;
        var photos = value[x].photos;

        if(insta === null || insta === undefined){
          userPhotos(name, photos);
        }else{
          var userName = insta.username;
          var instaPoto = insta.photos;
          instaPhotos(userName, instaPoto);
          userPhotos(name, photos);
        }
      }
    });
  });
  userPhotos = function(name, photos){
    for(var k = 0; k < photos.length; k++){
      $('body').append($('<img src=' + photos[k].url + '></img>'));
    }
  };

  instaPhotos = function(userName, instaPoto){
    for(var j = 0; j<instaPoto.length; j++){
    $('body').append($('<img src=' + instaPoto[j].image + '></img>'));

    }
  };
});
