class Me {
  constructor(name, awake) {
    this.name = name;
    this.isAwake = awake;
  }
}
Me.prototype.beAwesome = function () {
  console.log("Be Awesome!");
};

let dranoid = new Me("Dunsin", true);
if (dranoid.isAwake == true) {
  dranoid.beAwesome(); //:)
}

// As I no too like stress. This script shows that I like to catch the right cruise 24/7
