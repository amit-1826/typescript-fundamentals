function add(n1, n2) {
    return n1 + n2;
}
var fnType; // assigning function type
fnType = add;
console.log(fnType(5, 8));
function add1(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
add1(4, 6, function (result) {
    console.log(result);
});
