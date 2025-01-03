let keyy = "05aef76b4355cdab242f0489ab39d93f";
let url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=egypt";


  let searchBtn = document.getElementById("searchBtn");
let namee;
let searchValue;
async function gett() {
  try {
    const response = await fetch(url + "&appid=" + keyy);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

  const data = await response.json();
  
  console.log(data.name);

  namee=data.name;


  // identify the data
 document.getElementById("locName").innerText = data.name;
  document.getElementById("temp").innerText = data.main.temp + "°C";
  document.getElementById("weather").innerText = data.weather[0].main;
  document.getElementById("minTemp").innerText = data.main.temp_min + "°C";
  document.getElementById("maxTemp").innerText = data.main.temp_max + "°C";
  document.getElementById("pressure").innerHTML = data.main.pressure + " hPa";
  document.getElementById("humidity").innerText = data.main.humidity + "%";
  document.getElementById("wind").innerText = data.wind.speed + " m/s";

  // change bg depend on weather
  switch (data.weather[0].main) {
    case "Clear":
      document.body.style.backgroundImage = "url('./imgs/clear.jpg')";
      searchBtn.style.color = "black";

      break;
    case "Clouds":
      document.body.style.backgroundImage = "url('./imgs/cloud.jpg')";
      searchBtn.style.color = "white";
      break;
    case "Rain":
    case "Drizzle":
    case "Mist":
      document.body.style.backgroundImage = "url('./imgs/rainy.jpg')";
      searchBtn.style.color = "gray";
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = "url('./imgs/storm.jpg')";
      break;
    case "Snow":
      document.body.style.backgroundImage = "url('./imgs/snow.jpg')";
      break;
    default:
      break;
  }

  // reapply the backgroundChange animation
  document.body.style.animation = 'none';
  document.body.offsetHeight;
  document.body.style.animation = 'backgroundChange 3s ease-in-out';
} catch (error) {
  // console.error("wa2 :'");
  let notif = document.createElement("div");
  notif.setAttribute("class", "notif show");
  let p = document.createElement("p");
  p.setAttribute("class", "notif-p");
  p.innerHTML = `<i class="fa-solid fa-x err"></i>  Please enter a city name`;
  notif.appendChild(p);
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.classList.remove("show");
    notif.classList.add("hide");
    setTimeout(() => {
      notif.remove();
    }, 300);
  }, 2000);
}
 }
// identify search
let search = document.getElementById("search");


function searchCity() {
   searchValue = search.value;
  if ( searchValue === " " || searchValue === "" || searchValue === null) {
    let notif = document.createElement("div");
    notif.setAttribute("class", "notif show");
    let p = document.createElement("p");
    p.setAttribute("class", "notif-p");
    p.innerHTML = `<i class="fa-solid fa-x err"></i>  Please enter a city name`;
    notif.appendChild(p);
    document.body.appendChild(notif);
    setTimeout(() => {
      notif.classList.remove("show");
      notif.classList.add("hide");
      setTimeout(() => {
        notif.remove();
      }, 300);
    }, 2000);
  }  
  else{
    url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchValue}`;
  document.getElementById("weatherContainer").style.animation = "fadeIn 3s";
  gett();
  }
}
searchBtn.addEventListener("click", () => {
  searchCity();
});

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchCity();
  }
});

gett();

