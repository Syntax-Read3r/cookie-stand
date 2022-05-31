let Hour = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let Seattle = {
    customerRange: [23,65],
    averageConversionRate_cookieValue: 6.3,
    estimatedCustomer_perHour: function() {
        return Math.floor(Math.random() * (this.customerRange[1] - this.customerRange[0]) + this.customerRange[0]);
    },
    cookiesPurchased_oneHour: function() {
        return Math.floor(this.averageConversionRate_cookieValue * this.estimatedCustomer_perHour())
    },
    changeCusRange: function(min, max) {
        return this.customerRange = [min, max];
    },
};

console.log(Seattle.cookiesPurchased_oneHour())
