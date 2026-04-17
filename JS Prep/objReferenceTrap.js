const a = {
  name: "John",
};

const b = a;
b.name = "Jane";

console.log(a.name);

/*
    a does NOT store the object directly
    It stores a reference (memory address) to the object

    You are NOT copying the object
    You are copying the reference

    How to avoid it: You need to clone (copy) the object, not share it. Means use spread operator
    const b = {...a}
*/
