function makeAdder(x) {
    // parameter 'x' is an inner variable

    // inner function 'add()' uses 'x', so
    // it has a "closure" over it.
    function add(y) {
        return y + x;
    };
    return add;
}

var x = 1;
var y = 1;
var fn = makeAdder(x);
console.log(fn(x));
var fn1 = makeAdder(5);
console.log(fn1(10));