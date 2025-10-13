// implicit type conversion

console.log("5" + 2);
console.log(2 + 3.5);

console.log("5" - 2);       // -, *, /, %
console.log("5" * 2);
console.log("5" / 2);
console.log("5" % 2);


console.log(true + 1); // true -> 1, flase -> 0

console.log(false + 0);

console.log("3" + true);      // 3true

console.log("3" - true);     // 3 - 1

console.log(null + 1);      // null -> false -> 0

console.log(undefined + 1); // undefined -> NAN


// explicit type conversion

// number

console.log(Number("42"));
console.log(Number("42px"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));
console.log(Number("abcd"));

// arithmetic shortcuts
console.log(typeof (+"10"));
console.log(typeof (-"10"));
console.log(typeof ("10" * 1));

// string

console.log(String(123) + " : " + typeof String(123));
console.log(String(true) + " : " + typeof String(true));
console.log(String(null) + " : " + typeof String(null));
console.log(String(undefined) + " : " + typeof String(undefined));

console.log(123 + '');
console.log(true + '');

// Boolean

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("hello!"));
console.log(Boolean(123));
console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean({}));


console.log(!!"hello");
console.log(!!0);


const user = {name: "adarsh", age: 22};
console.log((user.age + ' jain'));


let age = "10";
console.log(Number(age) + 5);

let username = "";

if(username) {
    console.log("Valid!");
} else {
    console.log("Not a valid user!");
}




console.log(0 == false); // allows us to perform type coersion (not that strict!)

console.log(0 === false);   // strict type check, does not allow type coersion