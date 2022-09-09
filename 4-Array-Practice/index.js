const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const texts = document.querySelector(".texts");
const print = (value) => {
  value = `<span>${value}<span>`;
  texts.insertAdjacentHTML("beforeend", value);
};

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
print(
  `<b>Filter the list of inventors for those who were born in the 1500's<b>`
);
const filteredByBorn = inventors.filter(({ year }) => year >= 1500);
filteredByBorn.forEach(({ first, last, year, passed }) =>
  print(`${first} ${last} ${year} ${passed}`)
);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
print(`<b><hr>Give us an array of the inventors first and last names<b>`);
const filteredByFirstLastName = inventors.map((inventor) => {
  return {
    first: inventor.first,
    last: inventor.last,
  };
});
filteredByFirstLastName.forEach(({ first, last }) => print(`${first} ${last}`));

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
print(`<b><hr>Sort the inventors by birthdate, oldest to youngest<b>`);
const sortByBirthdate = [...inventors];
sortByBirthdate.sort((a, b) => a.year - b.year);
sortByBirthdate.forEach(({ first, last, year, passed }) =>
  print(`${first} ${last} ${year} ${passed}`)
);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
print(`<b><hr>How many years did all the inventors live all together?<b>`);
const inventorsLiveYear = inventors.reduce((accumulator, currValue) => {
  return accumulator + currValue.passed - currValue.year;
}, 0);
print(inventorsLiveYear);

// 5. Sort the inventors by years lived
print(`<b><hr>Sort the inventors by years lived<b>`);
const sortByYearsLived = [...inventors];
sortByYearsLived.sort((a, b) => a.passed - a.year - (b.passed - b.year));
sortByYearsLived.forEach(({ first, last, year, passed }) =>
  print(`${first} ${last} ${year} ${passed}`)
);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
print(
  `<b><hr>create a list of Boulevards in Paris that contain 'de' anywhere in the name<b>`
);
const boulevardsWithDe = people.filter((boulevard) =>
  boulevard.toLowerCase().indexOf("de")
);
let temp = "";
boulevardsWithDe.forEach((boulevard, index) => {
  temp += ` ${boulevard}`;
  if (index % 7 === 1 || index === boulevardsWithDe.length - 1) {
    print(temp);
    temp = "";
  }
});
// 7. sort Exercise
// Sort the people alphabetically by last name
//Its boring exercise -_-

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
const setData = new Set();
data.forEach((item) => {
  setData.add(item);
});
const filteredData = Array.from(setData, (item) => print(item));
