//Business Logic
/* To include code which: 1) takes entries 2) adds cumulative entries and prepares for display */

/* Potential code for navigation
$('a.nav-item.Story').tab('#story') // Select tab by name
$('#myTab li:first-child a').tab('show') // Select first tab
Potential code for name getting
var name1 = document.getElementsByClassName("player1").text

var name2 = document.getElementsByClassName("player2").text

console.log(name1)
console.log(name2)
*/

var pigsArray = []
var turnRollArray = []

function Pig(pigName, score) {
  this.playerName= playerName;
  this.score = score;
  pigsArray.push(this);
}


Array.prototype.sum = function() {
  return this.reduce(function(a,b) {return a + b});
}



//User Interface Logic
/* To include code which: 1)Which toggles and hide/shows various parts 2) takes entries from inputs (in future, users could also enter parameter for their game) 3) displays calculated score from BL and shows refresh  */
$(document).ready(function(){
  $(".start").click(function(){
    $(".playdetails").fadeIn();
  });
  $("form.playernames").submit(function(event){
      event.preventDefault()
      var name1 = $("input.player1").val();
      var name2 = $("input.player2").val();
      if (name1 == "" || name2 == ""){
        $("form > p").text("*Complete Both Fields*");
      } else {
      $("#pig1 > p").append(name1 + "-Piggy");
      $("#pig2 > p").append(name2 + "-Piggy");
      $(".playdetails").remove();
      $("#pigs").fadeIn();
    } //end of else
    $("pigs").ready(function(){
      $("#pig1 > .roll").click(function(){
        $(".score1").append("scoreTot1");
      }); // end pig1 roll
      $("#pig1 > .log").click(function(){
        $(".cumuScore1").append("cumuScoreTot1");
      }); // end pig1 log
      $("#pig2 > .roll").click(function(){
        $(".score2").append("scoreTot2");
      }); // end pig2 roll
      $("#pig2 > .log").click(function(){
        $(".cumuScore2").append("cumuScoreTot2");
      }); // end pig1 log
    });
  }); //end of submit
}); //end of document.ready
