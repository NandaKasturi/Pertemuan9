var Jhon = {
  fullName: "Jhon Chenaaaaa",
  bill: [124, 48, 268, 180, 42],
  tipCals: function () {
    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bill.length; i++) {
      var percentage;
      var bills = this.bill[i];

      if (bills < 50) {
        percentage = 0.2;
      } else if (bills >= 50 && bills < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bills * percentage;
      this.finalValue[i] = bills + bills * percentage;
    }
  },
};

var Mike = {
  fullName: "Mike",
  bill: [77, 375, 110, 45],
  tipCals: function () {
    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bill.length; i++) {
      var percentage;
      var bills = this.bill[i];

      if (bills < 100) {
        percentage = 0.2;
      } else if (bills >= 100 && bills < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      this.tips[i] = bills * percentage;
      this.finalValue[i] = bills + bills * percentage;
    }
  },
};

Jhon.tipCals();
Mike.tipCals();
console.log(Jhon, Mike);
