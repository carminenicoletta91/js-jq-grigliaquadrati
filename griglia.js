// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati
// diventano rossi, gli altri diventano verdi
$( document ).ready(function() {
  $(".box-quadrato#red").click(function(){
    $(".box-quadrato#red").addClass("red");
    $(".box-quadrato#green").addClass("green");
  });

});
