$(document).ready(function() {
/* TWITCH FOOD */
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/food", function(json) {
    if(json.stream === null) {
      $(".TF-status").html("offline");
      $(".TF-status").css("color", "#a4a4a4");
    }
    else {
      var game = json.stream.game;
      var viewers = json.stream.viewers;
      $(".TF-status").html("Streaming - " + game + "<br/> Viewers: " + viewers);      
    } 
  });
 
  $.getJSON("https://wind-bow.glitch.me/twitch-api/users/food", function(json) {
    $(".TF-logo").html("<img src='" + json.logo + "'>");
  });   
  

/* FREECODECAMP */
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp", function(json) {
    if(json.stream === null) {
      $(".FCC-status").html("offline");
      $(".FCC-status").css("color", "#a4a4a4");
    }
    else {
      var game = json.stream.game;
      var viewers = json.stream.viewers;
      $(".FCC-status").html("Streaming - " + game + "<br/> Viewers: " + viewers);      
    }
  });
  
  $.getJSON("https://wind-bow.glitch.me/twitch-api/users/freecodecamp", function(json) {
    $(".FCC-logo").html("<img src='" + json.logo + "'>");
  });  
  
 
/* GIANTBOMB */  
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/giantbomb", function(json) {
    if(json.stream === null) {
      $(".GB-status").html("offline");
      $(".GB-status").css("color", "#a4a4a4");
    }
    else {
      var game = json.stream.game;
      var viewers = json.stream.viewers;
      $(".GB-status").html("Streaming - " + game + "<br/> Viewers: " + viewers);      
    }
  });
  
  $.getJSON("https://wind-bow.glitch.me/twitch-api/users/giantbomb", function(json) {
    $(".GB-logo").html("<img src='" + json.logo + "'>");
  });    
  
 
/* MANY A TRUE NERD */  
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/manyatruenerd", function(json) {
    if(json.stream === null) {
      $(".MATN-status").html("offline");
      $(".MATN-status").css("color", "#a4a4a4");
    }
    else {
      var game = json.stream.game;
      var viewers = json.stream.viewers;
      $(".MATN-status").html("Streaming - " + game + "<br/> Viewers: " + viewers);      
    }
  });
  
  $.getJSON("https://wind-bow.glitch.me/twitch-api/users/manyatruenerd", function(json) {
    $(".MATN-logo").html("<img src='" + json.logo + "'>");
  });     
});
