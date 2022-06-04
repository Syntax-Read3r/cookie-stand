const hour = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Location {
  constructor(city, minmax, averageConversionRate_cookieValue) {
    this.name = city;
    this.list = document.getElementById(this.name);
    this.customerRange = [minmax[0], minmax[1]];
    this.averageConversionRate_cookieValue = averageConversionRate_cookieValue;
    this.customersEachHour = [];
    this.cookiesSoldEachHour = [];
    this.totalDailyCookies = 0;
    this.render();
  }
  
  estimatedCustomer_perHour() {
    for (let a = 0; a < hour.length; a++) {
      this.customersEachHour.push(
        random(this.customerRange[0], this.customerRange[1])
      );
    }
  }
  
  cookiesPurchased_oneHour() {
    for (let a = 0; a < this.customersEachHour.length; a++) {
      this.cookiesSoldEachHour.push(
        Math.floor(
          this.customersEachHour[a] * this.averageConversionRate_cookieValue
        )
      );
    }
  }
  
  changeCusRange(min, max) {
    return (this.customerRange = [min, max]);
  }

  tableHeader() {
    let x = 0
    while(x < 1) {
      let item1 = document.createElement("tr");
      item1.textContent = `${hour[a]}`;
      this.list.append(item1)
      x++
    }
  }
  
  render() {
    this.estimatedCustomer_perHour();
    this.cookiesPurchased_oneHour();
    for (let a = 0; a < this.customersEachHour.length; a++) {

      let item = document.createElement("td");
      item.textContent = `${this.customersEachHour[a]} cookies`;
      this.list.append(item);
      this.totalDailyCookies = this.totalDailyCookies + this.customersEachHour[a];
    }
    let total = document.createElement("td");
    total.textContent = `${this.totalDailyCookies} cookies`;
    this.list.append(total);
  }
}

const seattle = new Location('Seattle', [23,65], 6.3);
const tokyo = new Location('Tokyo', [3,24],1.2);
const dubai = new Location('Dubai', [11,38],3.7);
const paris = new Location('Paris', [20,38],2.3);
const lima = new Location('Lima', [3,16],4.6)