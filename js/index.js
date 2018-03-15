if (navigator.geolocation) {
  //Return the user's longitude and latitude on page load using HTML5 geolocation API
  window.onload = function () {
  var currentPosition;
  function getCurrentLocation (position) {
      currentPosition = position;
      latitude = currentPosition.coords.latitude;
      longitude = currentPosition.coords.longitude;
      //AJAX request
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=5191901e9fce1e3cae9465a2a402c6f0", function (data) {
          var rawJson = JSON.stringify(data);
          var json = JSON.parse(rawJson);
          updateWeather(json); //Update Weather parameters
      });

  document.getElementById("current_temp").innerHTML = (celcius).toFixed(1) + "&deg;" + "C";

  }
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}
  };