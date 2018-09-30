//Business Logic
/* To include code which: 1) takes entries 2) adds cumulative entries and prepares for display */
$('a.nav-item.Story').tab('#story') // Select tab by name
$('#myTab li:first-child a').tab('show') // Select first tab
$('#myTab li:last-child a').tab('show') // Select last tab
$('#myTab li:nth-child(3) a').tab('show') // Select third tab

function(){

}
//User Interface Logic
/* To include code which: 1)Which toggles and hide/shows various parts 2) takes entries from inputs (in future, users could also enter parameter for their game) 3) displays calculated score from BL and shows refresh  */
$(document).ready(function(){
  $(".start").click(function(){
    $(".playdetails").fadeIn();
  });
  $("input.player1").append(var Piggy1)


})
