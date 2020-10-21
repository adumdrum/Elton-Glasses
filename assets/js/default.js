$(function() {
  var happyAudio = document.getElementById('em-happy-song');
  var numbAudio = document.getElementById('em-numb-song');
  var angryAudio = document.getElementById('em-angry-song');


  // toggle happy
  $('body').on('click', '#sm-toggle-happy', function(e) {
    e.preventDefault();
    $(".sm-body").addClass("sm-body--happy");
    $(".sm-body").removeClass("sm-body--angry");
    $(".sm-body").removeClass("sm-body--numb");
    // on click play happyAudio
    happyAudio.play();
    numbAudio.pause();
    angryAudio.pause();
  });

  // toggle numb
  $('body').on('click', '#sm-toggle-numb', function(e) {
    e.preventDefault();
    $(".sm-body").addClass("sm-body--numb");
    $(".sm-body").removeClass("sm-body--angry");
    $(".sm-body").removeClass("sm-body--happy");
    // on click play numbAudio
    numbAudio.play();
    angryAudio.pause();
    happyAudio.pause();
  });

  // toggle angry
  $('body').on('click', '#sm-toggle-angry', function(e) {
    e.preventDefault();
    $(".sm-body").addClass("sm-body--angry");
    $(".sm-body").removeClass("sm-body--happy");
    $(".sm-body").removeClass("sm-body--numb");
    // on click play angryAudio
    angryAudio.play();
    happyAudio.pause();
    numbAudio.pause();
  });
});
