// 1 - Sopra alla griglia deve esserci un
// contatore che conta quanti rossi e
// quanti verdi sono stati scoperti;
$( document ).ready(function() {
  var contatoreverde=0;var contatorerosso =0;
  // funzione per contare i quadrati verdi
  $(".box-quadrato.green").click(function(){
    $(this).addClass("verde")
    contatoreverde +=1;
    $("#verdeconteggio").text(contatoreverde)
  });
  // funzione per contare i quadrati rossi
  $(".box-quadrato.red").click(function(){
    $(this).addClass("rosso")
    contatorerosso +=1;
    $("#rossoconteggio").text(contatorerosso)
  });
});
