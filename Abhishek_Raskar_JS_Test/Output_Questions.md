1.{console.log("Start");
 setTimeout(() => console.log("Timeout"), 0);
 Promise.resolve().then(() => console.log("Promise"));
 console.log("End");}
- Ans = Start -> End -> Promise -> Timeout
- beacuse JavaScript reads the code from top to bottom synchrnously
console.log("Start") shows "Start" at first as it is a synchrnous.
setTimeout(..., 0) is delayed (even if 0), so it waits as it is a asynchrnous.
Promise finishes quickly, so it logs "Promise" after the main code asynchrnous.
In Last, the "Timeout" will printed.

2.{let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c)}
- Ans = 3
- beacuse 
{ ...original } only copies the first level, not nested parts i.e b.
So, shallowCopy and original both refer to the same b object.
Changing shallowCopy.b.c also changes original.b.c to 3.


3.{
for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 1000);}
for (let j = 1; j <= 3; j++) { setTimeout(() => console.log(j), 1000);}
}
- Ans = 4 4 4 and 1 2 3
- beacause With var, the value of i changes each loop, but since it’s global, when setTimeout finally runs, i has reached 4, 
so 4 is printed three times.
With let, each loop keeps its own j value seperate. So j prints 1, 2, 3 because let keeps each j unique.

4.{
let obj1 = { a: 10 };
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);
}
- Ans = 20
- because obj2 = obj1 means both are pointing to the same object.
Change in obj2.a = 20 also changes obj1.a because they’re the same object.
therefore obj1.a becomes 20.
