var myObj;
var lat;
var windSpeed;
var celcius;
var url;
var lon;
var xmlhttp = new XMLHttpRequest();
var x = document.getElementById("long");
var apiKey = "&APPID=5191901e9fce1e3cae9465a2a402c6f0";// api key//   

function loadWeather(){

  var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&q=`; // url with json data
  xmlhttp.open("GET", url + apiKey, true); 
  xmlhttp.send(); 
}
  xmlhttp.onload = function (){
  if (xmlhttp.status === 200){
     myObj = JSON.parse(xmlhttp.responseText);
     windSpeed = myObj.wind.speed;
     celcius = myObj.main.temp;
    document.getElementById("current_temp").innerHTML = (celcius).toFixed(1) + "&deg;" + "C";
    document.getElementById("maxTemp").innerHTML = (myObj.main.temp_max).toFixed(1) + "&deg;" + "C";
    document.getElementById("minTemp").innerHTML = (myObj.main.temp_min).toFixed(1) + "&deg;" + "C";
    document.getElementById("humidity").innerHTML = myObj.main.humidity + "%";
    document.getElementById("windy").innerHTML = (myObj.wind.speed) * 2.236936.toFixed(0) + " mph";
    document.getElementById("desc").innerHTML = "Today there will be" + "<i>"+myObj.weather[0].main +"</i>";
    document.getElementById("city").innerHTML = myObj.name;

    // *************** Sunrise and sunset **************//
    var theSunrise = new Date(myObj.sys.sunrise * 1000);
    sunriseStringHours = theSunrise.getHours();
    sunriseStringMins = (theSunrise.getMinutes()<10?'0':'') + theSunrise.getMinutes();
    sunriseTime = sunriseStringHours+ ':' +sunriseStringMins;
    var theSunset = new Date(myObj.sys.sunset * 1000);
    sunsetStringHours = theSunset.getHours();
    sunsetStringMins = (theSunset.getMinutes()<10?'0':'') + theSunset.getMinutes();
    sunsetTime = sunsetStringHours+ ':' +sunsetStringMins;
    document.getElementById("sunset").innerHTML = sunsetTime;
    document.getElementById("sunrise").innerHTML = sunriseTime;
}
}
    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);  
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    function success(pos) {
      lat  = pos.coords.latitude;
      lon = pos.coords.longitude;

      loadWeather();
}    
    }
    getLocation();


  