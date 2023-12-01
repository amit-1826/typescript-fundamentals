function add(n1: number, n2: number): number {
    return n1 + n2;
}

let fnType: (a: number, b: number) => number  // assigning function type

fnType = add;

console.log(fnType(5, 8));


function add1(n1: number, n2: number, cb: (a: number) => void) {
    const result = n1 + n2;
    cb(result);
}

add1(4, 6, (result: number) => {
    console.log(result);
})
