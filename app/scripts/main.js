
$(document).ready(function(){
  /* GOALS!!!!
    ~ able to click to enlarge photo

      STREACH
      ~ maybe have an option to show all photos or image gallery
      ~ show all json photos?
    */
  $.getJSON('scripts/4tinder.json', function(data){
    $.each(data, function(k,value){
      for(var x = 0; x<value.length; x++){
      //  console.log(value[x]);
        var insta = value[x].instagram;
        var name = value[x].name;
        var photos = value[x].photos;
        var bio = value[x].bio;
        var userId = value[x]._id;
        var birthday = value[x].birth_date;
        var instaGram = value[x].intagram;
        userInfo(name, birthday, userId, bio, photos, insta);

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

  userInfo = function(name, birthday, userId, bio, photos, instaGram){
    $('body').append($('<h3>Name : ' + name + '</h3>' +
    '<p>Bio: ' + bio + '</p>' +
    '<p> Birthday: ' + birthday + '</p>'+
    '<p> UserId: ' + userId + '</p>'));
    for(var x = 0; x<photos.length; x++){
      $('body').append($('<img src = ' + photos[x].url + '></img>'));
    }

    if(instaGram === null || instaGram === undefined){
      console.log('nothing here');
    }else{
      $('body').append($('<h3> IG userName: ' + instaGram.username + '</h3>'));
      for(var j = 0; j<instaGram.photos.length; j++){
        $('body').append($( '<img src= ' + instaGram.photos[j].image + '></img>'));
      }
    }
  };

  userPhotos = function(name, photos){
    for(var k = 0; k < photos.length; k++){
      //$('body').append($('<img src=' + photos[k].url + '></img>'));

    }
  };

  instaPhotos = function(userName, instaPoto){
    for(var j = 0; j<instaPoto.length; j++){
  //  $('body').append($('<img src=' + instaPoto[j].image + '></img>'));

    }
  };
});
