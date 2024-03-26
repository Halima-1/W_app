function weather() {
  let input = document.getElementById("input").value;
  let iconn = document.getElementById("iconImg");
  let iconDescription = document.getElementById("description");
  let locationTemp = document.getElementById("temp");
  let locationHeat = document.getElementById("heat");
  let locationName = document.getElementById("city");
  let locationState = document.getElementById("state");
  // let locationCountry = document.getElementById("country");
  let locationHumidity = document.getElementById("humid");
  let windSpeed = document.getElementById("wind");
  let locationDate = document.getElementById("date");
  let locationTime = document.getElementById("time");
  let sunrise = document.getElementById("rise");
  let sunset = document.getElementById("set");
  let notification = document.getElementById("notify");
  let display = document.getElementById("info");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1369021a9ab99c5a39d4f59fef56c43d&units=metric`
  )
    .then(function (data) {
      return data.json();
    })
    .then((response) => {
      console.log(response);
      // console.log(response.cod);
      let codee = response.cod;
      let code = parseInt(codee);
      console.log(code);

      if (input && code == 200) {
        // display.classList.contains("show");
        display.classList.remove("hide");
        display.classList.add("show");
        notification.innerHTML = "";
      } else if (input && code == 404) {
        display.classList.remove("show");
        display.classList.add("hide");
        notification.innerHTML = `<code style='color: red;'>City ${input} is not found<code/>`;
      } else {
        display.classList.remove("show");
        display.classList.add("hide");
        notification.innerHTML =
          "<code style='color: red;'>please input a city, connect to the internet and try again!<code/>";
      }

      let info = response.main;

      // temperature
      let temperature = info.temp;
      locationTemp.innerHTML = temperature + "°c";
      let descript = response.weather[0].description;

      // weather icon
      let img = response.weather[0].icon;
      iconn.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${img}@2x.png`
      );

      iconDescription.innerHTML = descript;

      // humidity
      let humid = info.humidity;
      locationHumidity.innerHTML = `${humid}  gm/m`;

      // city & country
      let city = response.name;
      let locationCountry = response.sys.country;
      locationName.innerHTML = `${city}, ${locationCountry}.`;

      // sunsrise & sunset
      let sun = response.sys.sunset;
      var newDate = new Date(sun * 1000);
      sunset.innerHTML = "Sunset: " + newDate.toLocaleTimeString();

      let sunr = response.sys.sunrise;
      var newDatee = new Date(sunr * 1000);
      sunrise.innerHTML = "Sunrise: " + newDatee.toLocaleTimeString();

      // let time = output.timezone;
      // // var zone = new Date(time);
      // // currentTime.innerHTML = zone.toLocaleTimeString();

      //  wind speed
      let speedd = response.wind.speed;
      windSpeed.innerHTML = speedd + "km/h";
      // let date = new Date();
      // locationDate.innerHTML = date.toDateString();
      let time = new Date();
      locationTime.innerHTML = time.toLocaleString();
    })

    // error message
    .catch((err) => {
      console.log(err.message);
    });

  // random background image
  let body = document.body;
  let random = Math.floor(Math.random() * 12);
  imgSrc = random + ".jpg";
  body.style.backgroundImage = `url(${imgSrc})`;
}

function clearr() {
  let clear = document.getElementById("info");
  let clearBtn = document.getElementById("clearBtn");
  if (clear.classList.contains("show")) {
    clear.classList.remove("show");
    clear.classList.add("hide");
    clearBtn.classList.add("hide");
  } else {
    clear.classList.remove("hide");
    clear.classList.add("show");
  }
}
// random background image
let body = document.body;
let random = Math.floor(Math.random() * 12);
imgSrc = random + ".jpg";
body.style.backgroundImage = `url(${imgSrc})`;
