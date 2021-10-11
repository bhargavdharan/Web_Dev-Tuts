const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.innerText =
      "It is nice and sunny outside today. Wear shorts! Go to the beach,or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down - it is freezing! Best to stay in with a cup of coffee";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute";
  } else {
    para.textContent = "";
  }
}





