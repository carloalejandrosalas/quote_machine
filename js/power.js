$("#accion").click(function(){ // Evento del evento
  Newquote();
});

$('document').ready(function(){ // Cuando termine de cargar la pagina
  Newquote();
})

function Newquote(){
  var twitter = document.getElementById('twitter');
  $.getJSON("https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520", function(a) {
    var numero = Math.floor(Math.random()*120); // Sacamos un numero aleatorio
    console.log(numero);
    //console.log(a);
    $("#quote-content").html(a[numero].quote);
    $('#quote-source').html("<p>— " + a[numero].name + "</p>");
    twitter.href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='"+a[numero].quote+"."+a[numero].name+"'";
    var randomColor =  "#"+Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    $('#contenido').css('background-color',randomColor);
    $('#quote-content').css('color',randomColor);
    $('#quote-source').css('color',randomColor);
    $('#quote').css('color',randomColor);
    $('#accion').css('background-color',randomColor);
  });
}
