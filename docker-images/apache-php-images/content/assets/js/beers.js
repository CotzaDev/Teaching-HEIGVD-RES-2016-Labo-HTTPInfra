$(function() {
  console.log("Loading beers");

  function loadBeers() {
    $.getJSON("/api/beers/1", function(beers) {
      console.log(beers);
      var message = "Someone drank all the bottles !";
      if(beers.length > 0) {
        message = beers[0].name + "\n" + beers[0].style + " " + beers[0].abv + "\n" + beers[0].country;
      }
      $("#beer").text(message);
    });
  };

  loadBeers();
  setInterval(loadBeers, 2000);
});
