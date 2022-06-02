const hour = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm",];

function Location(city,minmax, averageConversionRate_cookieValue) {
  this.name = city;
  this.customerRange = [minmax[0], minmax[1]];
  this.averageConversionRate_cookieValue = averageConversionRate_cookieValue;
  this.customerEachRange = [];
  this.cookiesSoldEachHour = [];
  this.totalDailyCookies = 0;
}

Location.prototype = {
  constructor: Location,
  estimatedCustomer_perHour: function() {
    for (let a = 0; a < hour.length; a++) {
      this.customersEachHour.push(
        random(this.customerRange[0], this.customerRange[1])
      );
    }
  },
  cookiesPurchased_oneHour: function () {
    for (let a = 0; a < this.customersEachHour.length; a++) {
      this.cookiesSoldEachHour.push(
        Math.floor(
          this.customersEachHour[a] * this.averageConversionRate_cookieValue
        )
      );
    }
  },
  changeCusRange: function (min, max) {
    return (this.customerRange = [min, max]);
  },
  render() {
    this.estimatedCustomer_perHour();
    this.cookiesPurchased_oneHour();
    const unorderedList = document.getElementById("seattle");
    for (let a = 0; a < this.customersEachHour.length; a++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${hour[a]}: ${this.customersEachHour[a]} cookies`;
      unorderedList.appendChild(listItem);
      this.totalDailyCookies =
        this.totalDailyCookies + this.customersEachHour[a];
    }
    const listItem = document.createElement("li");
    listItem.textContent = `Total: ${this.totalDailyCookies} cookies`;
    unorderedList.appendChild(listItem);
  },
}


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = new Location('Seattle', [23,65], 6.3)

console.log(seattle)