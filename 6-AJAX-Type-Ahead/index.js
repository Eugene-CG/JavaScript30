const inputLine = document.querySelector(".cool-input");
const coolList = document.querySelector(".cool-list");
const CITY_URL = `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`;

const createPageContent = (city, population) => {
  population =
    [...population].slice(0, 3).join("") +
    "," +
    [...population].slice(3).join("");
  let temp = `
    <div class="cool-item">
            <p class="cool-item_city">${city}</p>
            <p class="cool-item_population">${population}</p>
          </div>
    `;
  coolList.insertAdjacentHTML("beforeend", temp);
};

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
const data = getData(CITY_URL);

let dataCopy;
const createDataCopy = async (data) => {
  let temp = await data;
  dataCopy = [...temp];
  dataCopy.forEach((item) => {
    createPageContent(item.city, item.population);
  });
};
createDataCopy(data);

const filterCities = (value, data) => {
  coolList.innerHTML = "";
  const filteredByNames = data.filter((item) => {
    let a = item.city.toLowerCase();
    let b = value.toLowerCase();
    return a.indexOf(b) >= 0;
  });
  filteredByNames.forEach((item) => {
    createPageContent(item.city, item.population);
  });
};

inputLine.addEventListener("input", ({ target }) => {
  let dataSuperMegaPuperCopy = [...dataCopy];
  if (target.value) {
    filterCities(target.value, dataSuperMegaPuperCopy);
  }
});
