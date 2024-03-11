//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

  $("#myth2").hide();
  $("#myth3").hide();
  $("#fact2").hide();
  $("#fact3").hide();
  $("#therm2").hide();
  $("#therm3").hide();

  // div container functions

  $("#myth1").click(function(){
    $("#myth1").hide();
    $("#myth2").show();
  });

  $("#myth2").click(function(){
    $("#myth2").hide();
    $("#myth3").show();
  });

  $("#myth3").click(function(){
    $("#myth3").hide();
    $("#myth1").show();
  });

  $("#fact1").click(function(){
    $("#fact1").hide();
    $("#fact2").show();
  });

  $("#fact2").click(function(){
    $("#fact2").hide();
    $("#fact3").show();
  });

  $("#fact3").click(function(){
    $("#fact3").hide();
    $("#fact1").show();
  });

  // Slide bars functions

    $("#q1").click(function(){
      $("#a1").slideToggle("slow");
    });

    $("#q2").click(function(){
        $("#a2").slideToggle("slow");
      });

    $("#q3").click(function(){
        $("#a3").slideToggle("slow");
    });

    $("#q4").click(function(){
        $("#a4").slideToggle("slow");
    });

  // thermometer image functions
  $("#therm1").click(function(){
    $("#therm1").hide();
    $("#therm2").show();
  });

  $("#therm2").click(function(){
    $("#therm2").hide();
    $("#therm3").show();
  });

  $("#therm3").click(function(){
    $("#therm3").hide();
    $("#therm1").show();
  });

  $("#title-text").click(function(){
    $("#title-text").addClass("animate-text");

    setTimeout(function(){
      $("#title-text").removeClass("animate-text");
    },2000);
  });

});