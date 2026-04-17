const obj = {
  name: "John",
  regular: function () {
    console.log("name in regular function", this.name);
  },
  arrow: () => {
    console.log("name inside arrow function", this.name);
  },
};

obj.regular();
obj.arrow();
