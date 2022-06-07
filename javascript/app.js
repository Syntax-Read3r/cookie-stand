// comment
const hour = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

const dataTable = document.getElementById("dataTable");
const headerRow = document.createElement("tr");
dataTable.appendChild(headerRow);
const headerItem = document.createElement("th");
  headerRow.appendChild(headerItem);
for (let a = 0; a < hour.length; a++) {
  const headerItem = document.createElement("th");
  headerItem.textContent = hour[a];
  headerRow.appendChild(headerItem);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Location(city, minmax, averageConversionRate_cookieValue) {
  this.name = city;
  this.customerRange = [minmax[0], minmax[1]];
  this.averageConversionRate_cookieValue = averageConversionRate_cookieValue;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalDailyCookies = 0;
}

Location.prototype.estimatedCustomer_perHour = function () {
  for (let a = 0; a < hour.length; a++) {
    this.customersEachHour.push(
      random(this.customerRange[0], this.customerRange[1])
    );
  }
};

Location.prototype.cookiesPurchased_oneHour = function () {
  for (let a = 0; a < this.customersEachHour.length; a++) {
    this.cookiesSoldEachHour.push(
      Math.floor(
        this.customersEachHour[a] * this.averageConversionRate_cookieValue
      )
    );
  }
};

Location.prototype.changeCusRange = function (min, max) {
  return (this.customerRange = [min, max]);
};

Location.prototype.render = function () {
  this.estimatedCustomer_perHour();
  this.cookiesPurchased_oneHour();

  const tableRow = document.createElement("tr");
  dataTable.appendChild(tableRow);
  const rowTitle = document.createElement("td");
  rowTitle.textContent = this.name;
  tableRow.appendChild(rowTitle);

  for (let a = 0; a < this.cookiesSoldEachHour.length; a++) {
    let item = document.createElement("td");
    item.textContent = this.cookiesSoldEachHour[a];
    tableRow.append(item);
    this.totalDailyCookies = this.totalDailyCookies + this.customersEachHour[a];
  }
  let total = document.createElement("td");
  total.textContent = `${this.totalDailyCookies} Total`;
  tableRow.append(total);
};

const seattle = new Location("Seattle", [23, 65], 6.3);
const tokyo = new Location("Tokyo", [3, 24], 1.2);
const dubai = new Location("Dubai", [11, 38], 3.7);
const paris = new Location("Paris", [20, 38], 2.3);
const lima = new Location("Lima", [3, 16], 4.6);

const myStores = [seattle, tokyo, dubai, paris, lima];

for (let a = 0; a < myStores.length; a++) {
  myStores[a].render();
}

const total = document.createElement("th");
  headerRow.appendChild(total);
  total.textContent = 'Total'


// Form eventLister code below

const formEvents = document.getElementById('submit');