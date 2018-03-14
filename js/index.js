var myObj;
var geo = {};
var url = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q="; // url with json data
var city = "new romney";// City or town //
var apiKey = "&APPID=5191901e9fce1e3cae9465a2a402c6f0";// api key//   
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    let windSpeed = myObj.wind.speed;
    let celcius = myObj.main.temp;
    document.getElementById("current_temp").innerHTML = (celcius).toFixed(1) + "&deg;" + "C";
    document.getElementById("maxTemp").innerHTML = (myObj.main.temp_max).toFixed(1) + "&deg;" + "C";
    document.getElementById("minTemp").innerHTML = (myObj.main.temp_min).toFixed(1) + "&deg;" + "C";
    document.getElementById("humidity").innerHTML = myObj.main.humidity + "%";
    document.getElementById("windy").innerHTML = (myObj.wind.speed) * 2.236936.toFixed(0) + " mph";
    document.getElementById("desc").innerHTML = "Today there will be" + "<i>"+myObj.weather[0].main +"</i>";
    document.getElementById("city").innerHTML = myObj.name;
  }
};
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
    // x.innerHTML = "yippee!";

  }
  else
  { 
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }

}
function success (pos) {
  geo.lat = pos.coords.latitude
  geo.long = pos.coords.longitude

  console.log(geo.lat, geo.long)
  document.getElementById('lat').innerHTML = geo.lat
  document.getElementById('long').innerHTML = geo.long
}
console.log(geo.lat);
        xmlhttp.open("GET", url + city + apiKey, true); 
        xmlhttp.send(); 

