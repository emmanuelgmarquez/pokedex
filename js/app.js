// const { listenerCount } = require("gulp");

$(function() {
  var pokemonSearch;
  var defaultPokemon = '1';
  var defaultPokemonData;
  var pokemonList;

  var initFunc = function(){
    https://pokeapi.co/api/v2/pokemon/?limitall=812
    defaultPokemonData = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
      method: "GET",
    });

    pokemonList = $.ajax ({
      url: "https://pokeapi.co/api/v2/pokemon/?limitall=812" + pokemonList,
      method: "GET",
    });

    pokemonList.done(function(data){
      pokemonList = data;
       var list = data.results;
      for (var i = 0; i < list.length; i++){
        $('.container').append('<p class="name">' + list[i].name) + '</p>';
      }
    });

    defaultPokemonData.done(function( data ) {
      defaultPokemonData = data;
      $('.loading-container').removeClass('active');
      $('.pokedex h3').text(data.name.toUpperCase());
          $('.poke-img img').attr('src', data.sprites.front_default)
            console.log(data)

      $( ".btn2" ).click(function() {
        $('.list').show();

      $('.list h6').text(data.name)
      console.log(data)
      });

      $( ".btn1" ).click(function() {
        $('.list').hide();
      });
    });
     
    defaultPokemonData.fail(function( jqXHR, textStatus, error ) {
      alert( "Request failed: " + textStatus + error );
    });
  }

  initFunc()









    // get request
    $('.btn').on('click', function(){
      pokemonSearch = $('.pokedex input[type="text"]').val()

        var request = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
            method: "GET",
          });
           
          request.done(function( data ) {
            $('.pokedex h3').text(data.name.toUpperCase());
            $('.poke-img img').attr('src', data.sprites.front_default)
            console.log(data)
          });
           
          request.fail(function( jqXHR, textStatus, error ) {
            alert( "Request failed: " + textStatus + error );
          });
    })

    // post request

    
      

});
