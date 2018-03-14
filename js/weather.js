let myObj;
// let geo={};
const url = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q="; // url with json data
let city = "new romney"; // City or town //
const apiKey = "&APPID=5191901e9fce1e3cae9465a2a402c6f0";// api key//   
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
        // This if statement choose the wind direction element in the code //
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

        /* detects firefox and edge broswer as tempColorChange doesn't 
        work so gives  a subtle color change in the #tempChange div*/
      
  }
        celciusC = myObj.main.temp;
        let blue = "#98AFC7";
        let yellow = "#ffff00";
        let orange = "#ff6600"
  if (celciusC > 2 && celciusC < 14){
    document.getElementById('tempChange').style.backgroundColor = blue;
  } else if (celciusC > 14 && celciusC <= 21) {
    document.getElementById("tempChange").style.backgroundColor = yellow;
    document.getElementById("tempChange").style.color = "#404040";
  } else if (celciusC > 22){
    document.getElementById("tempChange").style.backgroundColor = orange;
  }else  
    document.getElementById("tempChange").style.backgroundColor = "#bd1616";


  if (/Edge/.test(navigator.userAgent)||/Firefox/.test(navigator.userAgent)) {
    document.getElementById("tempChange").style.backgroundColor = "#98AFC7";
      }
};
var x = document.getElementById("long");
var geo={};
getLocation();
    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
        // x.innerHTML = "yippee!";
  
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}
  function success(pos) {
    geo.lat  = pos.coords.latitude;
    geo.long = pos.coords.longitude;
    console.log(geo.lat, geo.long);

    document.getElementById("lat").innerHTML =  geo.lat;
    document.getElementById("long").innerHTML = geo.long;
}    
console.log("bob"); 
// console.log(typeof success);
// success(geo.lat, geo.long);
// console.log(longitude);
xmlhttp.open("GET", url + city + apiKey, true); 
xmlhttp.send();  
