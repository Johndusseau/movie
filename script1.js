var random_results;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
  $(".crystals").empty();

  var images = [
    "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/17/36/4000x2000/landscape-1504622356-crystals.jpg?resize=1200:*",
    "https://images-na.ssl-images-amazon.com/images/I/71Imq3vXaGL._SL1440_.jpg",
    "https://www.rd.com/wp-content/uploads/2017/08/12_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg",
    "https://scstylecaster.files.wordpress.com/2020/04/crystals.jpg",
  ];

  random_results = Math.floor(Math.random() * 99) + 30;

  $("#result").html("Random Result: " + random_results);

  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
    crystal.attr({
      class: "crystal",
      "data-random": random,
    });
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover",
    });

    $(".crystals").append(crystal);
  }
  $("#previous").html("Total Score: " + previous);
};

resetAndStart();

$(document).on("click", ".crystal", function () {
  var num = parseInt($(this).attr("data-random"));

  previous += num;

  $("#previous").html("Total Score: " + previous);

  console.log(previous);

  if (previous > random_results) {
    lost++;
    $("#lost").html("Try Again " + lost);
    previous = 0;

    resetAndStart();
  } else if (previous === random_results) {
    win++;
    $("#win").html("You Won, Way To Go " + win);
    previous = 0;

    resetAndStart();
  }
});
