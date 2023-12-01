type Combinable = number | string;  // type alias are applying multiple type into single
type typeDescriptior = 'ADMIN' | 'STAFF';

let unionTypeVar: Combinable;  // union types are type with multiple types using | symbol

function combine(input1: Combinable, input2: Combinable) {
    return +input1 + +input2;
}