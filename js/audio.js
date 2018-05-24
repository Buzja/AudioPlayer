      audioPlayer();
      function DetectSong(){
          var nameCur = " ";
        nameCur =  $("li .current-song a").html();
        $("#currentSong").html(nameCur);
      }
function audioPlayer(){
  var curSong = 0;
  $("#audio-player")[0].src = $("#playlist li a")[0];
  DetectSong();
  $("#playlist li a").click(function(e){
    e.preventDefault();
    $("#audio-player")[0].src = this;
    $("#audio-player")[0].play();
    $("#playlist li").removeClass("current-song");
    curSong = $(this).parent().index();
    $(this).parent().addClass("current-song");
    DetectSong();
  });
  $("#prev").click(function(){
    curSong--;
    if(curSong < 0)
    curSong = $("#playlist li a").length-1;
    $("#playlist li").removeClass("current-song");
    $("#playlist li:eq("+curSong+")").addClass("current-song");
    $("#audio-player")[0].src = $("#playlist li a")[curSong].href;
    $("#audio-player")[0].play();
    DetectSong();
  });
  $("#next").click(function(){
    curSong++;
    if(curSong == $("#playlist li a").length)
    curSong = 0;
    $("#playlist li").removeClass("current-song");
    $("#playlist li:eq("+curSong+")").addClass("current-song");
    $("#audio-player")[0].src = $("#playlist li a")[curSong].href;
    $("#audio-player")[0].play();
    DetectSong();
  });
  $("#repeat").click(function(){
    $("#audio-player")[0].stop();
  $("#audio-player")[0].currentTime = 0.0;
  $("#audio-player")[0].play();
  });
  $("#audio-player")[0].addEventListener("ended",function(){
    curSong++;
    if(curSong == $("#playlist li a").length)
    curSong = 0;
    $("#playlist li").removeClass("current-song");
    $("#playlist li:eq("+curSong+")").addClass("current-song");
    $("#audio-player")[0].src = $("#playlist li a")[curSong].href;
    $("#audio-player")[0].play();
    DetectSong();
  });

}
