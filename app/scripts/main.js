$(document).ready(function(){
  $.getJSON('scripts/tinder.json', function(data){
    $.each(data, function(key, val){
      for(var i = 0; i<val.length; i++){
        for(var x = 0; x<val[i].photos.length; x++){
          //$('body').append($('<img src=' + val[i].photos[x].url + '</img>'));
          $('div').append($('<li >' + val[i].name +
          '<img src =' + val[i].photos[x].url + /*' height="100" width="100"*/'></img>' + '</li>'));

        }
        // li name img /img
      }
    });
  });
});
