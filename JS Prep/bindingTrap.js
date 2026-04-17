const obj = {
  name: "John",
  greet() {
    return function () {
      console.log(this.name);
    }.bind(this);
  },
};

obj.greet()();

/* 
    Step 1 → this === obj (obj.greet())
    Step 2 → plain function call → this is lost (() is called)

    APPROACH 1:
    You store "this" in a variable called (self)
    Variables don’t change based on how a function is called
    Closures keep access to self

    this → obj
    self → permanently points to obj


    APPROACH 2: .bind(this) after returning the function
    .bind(this) creates a new function
    That new function has this permanently locked


    APPROACH 3: .call(obj)
    obj.greet().call(obj);
    You manually set this at call time


    | Approach      | When `this` is fixed        | How it works               |
    | ------------- | --------------------------- | -------------------------- |
    | `self = this` | At creation (via variable)  | Closure remembers variable |
    | `.bind(this)` | At creation (function copy) | Returns new function       |
    | `.call(user)` | At execution time           | You manually pass `this`   |

*/
