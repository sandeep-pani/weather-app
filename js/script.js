function addNewCard(info) {
  let weatherCards = document.getElementById("weather-cards");
  const newCard =
    '<div class="card" style="width: 18rem;"> \
      <div class="card-body"> \
      <h5 class="card-title">' +
    info.name +
    ", " +
    info.sys.country +
    '</h5> \
      <h6 class="card-subtitle mb-2 text-muted">' +
    info.weather[0].main +
    '</h6> \
      <p class="card-text">' +
    info.main.temp +
    "°F/" +
    Math.round(((info.main.temp * 5 - 160) / 9) * 100) / 100 +
    "°C";
  ("</p> \
    </div> \
    </div>");
  weatherCards.innerHTML += newCard;
}

function clickHandler() {
  let city = document.getElementById("city-search-bar").value;
  let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93f26e3c57081a6210de53b8dcfdfea4`;

  fetch(link)
    .then((response) => response.json())
    .then((data) => addNewCard(data));
}
