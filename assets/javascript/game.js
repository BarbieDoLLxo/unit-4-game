$(document).ready(function() {
  var total = 0;
  var compGuess;
  var wins = 0;
  var losses = 0;

  var diamond;
  var ruby;
  var opal;
  var emerald;

  function gameStart() {
    compGuess = Math.floor(Math.random() * 500);

    diamond = Math.floor(Math.random() * 25);
    ruby = Math.floor(Math.random() * 70);
    opal = Math.floor(Math.random() * 10);
    emerald = Math.floor(Math.random() * 5);
    console.log(diamond, ruby, opal, emerald, compGuess);

    $("#M").text("Match This Number " + compGuess);
  }

  gameStart();

  function winner() {
    if (compGuess === total) {
      alert("you win");
      wins = wins + 1;
      total = 0;
      $("#W").text("Wins " + wins);
      gameStart();
    }
  }

  function lose() {
    if (total > compGuess) {
      alert("you lose");
      losses = losses + 1;
      total = 0;
      $("#L").text("Losses " + losses);
      gameStart();
      console.log(losses);
    }
  }

  function userTotal() {
    $("#T").text("Your Total " + total);
  }

  $("#D").on("click", function() {
    total = total + diamond;
    console.log(total);
    console.log(diamond);
    userTotal();
    winner();
    lose();
  });

  $("#R").on("click", function() {
    total = total + ruby;
    console.log(total);
    console.log(ruby);
    userTotal();
    winner();
    lose();
  });

  $("#O").on("click", function() {
    total = total + opal;
    console.log(total);
    console.log(opal);
    userTotal();
    winner();
    lose();
  });

  $("#E").on("click", function() {
    total = total + emerald;
    console.log(total);
    console.log(emerald);
    userTotal();
    winner();
    lose();
  });
});
