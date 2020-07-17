function play_birthday(){
  document.getElementById("bg_music_btn").style.display = "none";
  var bg = new Audio("bg-music.mp3");
  bg.play();
  document.getElementById("text").style.display = "block";
  var text = document.getElementById('text');

  var typewriter = new Typewriter(text, {

      strings: ['Hey Ashwini','Please lay back and enjoy','Today is a special day'],
      autoStart: true

  });
  setTimeout(function(){
    document.querySelector(".first-block-content").style.padding = "0";
    document.querySelector(".first-block").style.background = "none";
    $("#text").css("display","none");
    $("#img1").css("display","block");
    $("#img1").hide().fadeIn(2000);

    $("h1").css("color","#fff");

  },19500);

  setTimeout(function(){
    var text2 = document.getElementById('heading');

    var typewriter2 = new Typewriter(text2, {

        strings: ['WISH YOU A VERY HAPPY BIRTHDAY!','THANKS FOR BEING THERE ALWAYS FOR ME','I KNOW THESE STATEMENTS REPEAT EVERY YEAR :p'],
        autoStart: true

    });
  },21000);
  setTimeout(function(){
    document.getElementById("heading").style.display = "none";
    $("#img1").css("display","none");
    $("#cake").css("display","block");
    $("#songbtn").css("display","block");

    // $(".letter").css("display","block");
  },50000);
  $("#songbtn").click(function(){
    bg.pause();
    $("#songbtn").css("display","none");
    var audio = new Audio("hbd.mp3");
    audio.play();
    setTimeout(function(){
      $("#gift").css("display","block");
    },17000);
  });

  $("#gift").click(function(){
    var drum = new Audio("drumroll.mp3");
    drum.play();
    $("#gift").css("display","none");
    $("#heading").html("Your favorite!!!!").hide().fadeIn(1000);
    $("#cake").attr("src","img/kfc.png").css({"width":"300px","height":"300px"}).hide().fadeIn(10000);

  });
}
