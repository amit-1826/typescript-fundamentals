// primitives: number, string, boolean, undefined, null
// complex types: arrays, objects
// function types

// primitives

let age: number = 23;

age = 34;

let name1: string;

name1 = 'Dubey';

let isWorking: boolean = false;
isWorking = true;

function add3(a: any) {
    let name: string = 'Amit';
    return name + a;
}

console.log(add3(34));

let hobbies: Array<string> = [];

hobbies = ['name', 'hobby 2', '3'];

// type alias

type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
    name: 'Amit',
    age: 34
}

let course: string | number = 'Javacript';

course = 34;  // can also assign number type though string is declared

// return type will be string
function add2(a: string, b: number): string {
    return a + b;
}

// Generics

// example
function insertAtBeginning(array: any[], value: any) {
    return [value, ...array];
}
const numbersArray = insertAtBeginning([1,2,3], 4); // here the type of numbersArray will be any[]
const stringsArray = insertAtBeginning(['1', '2', 'a'], 'b'); // here the type of stringsArray will be any[]

// solution
function insertAtBeginning1<T>(array: T[], value: T) {
    return [value, ...array];
}
const numbersArray1 = insertAtBeginning1([1,2,3], 4); // here the type of numbersArray will be numbers[]
const stringsArray1 = insertAtBeginning1(['1', '2', 'a'], 'b'); // here the type of stringsArray will be string[]

// Interfaces

// similar with 'type' but classes can implements this interface whereas 'type' cannot be implemented
interface Human {
    name: string;
    age: string;
    greet: () => void
}

let amit: Human;

amit = {
    name: 'amit',
    age: '32',
    greet() {
        console.log('Hello');
    }
}

class Person2 implements Human {
    age: string;

    greet(): void {
    }

    name: string;

}

