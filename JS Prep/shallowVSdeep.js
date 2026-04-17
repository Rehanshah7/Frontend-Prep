const obj = {
  name: "John",
  address: {
    city: "New York",
  },
};

// copy = { ...obj }; // shallow copy
const copy = JSON.parse(JSON.stringify(obj)); // deep copy
copy.name = "Jane";
copy.address.city = "San Francisco";

console.log(obj);
console.log(copy);

/*
    Shallow Clone (easy meaning): You copy the object, BUT inner things are still shared.
    Deep Clone (easy meaning): You copy the object, AND inner things are also copied.   
*/
