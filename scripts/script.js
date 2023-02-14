$(function () {
  console.log("show me the money");
//   $( "#draggable" ).draggable();

var $drag_counter = $("#event-drag"),
counts = 0;


 $("#draggable").draggable({
  drag: function () {
    counts++;
    updateCounterStatus($drag_counter, counts);

  },

 });

// took from Dr cumbie
 $("#resetGame").click(function () {
  console.log("clicked button");
  counts = 0;

  $("span.count").text(counts);
  $("#gameOutput").text("");

  $("#draggable").fadeOut(40).animate({ left: 0 }).fadeIn(30);
});



 function updateCounterStatus($bravo_counter, drag_count) {

//todo: if more than 174, then wow. if not, no wow
    
    var game_msg = "";

    if (drag_count < 350) {
      game_msg = "Drag longer to win";
    } else if (drag_count == 1200) {
      game_msg = "wow can't believe you found this, Well you are the actual WINNER, WOW";
    } else {
      game_msg = "Nice job you wasted your time just for this win, WOW";
      $("img").attr(
        "src",
        "https://i.imgflip.com/478jfr.png"
      );
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $bravo_counter).text(drag_count);



  }

});
