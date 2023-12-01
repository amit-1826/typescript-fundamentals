function addNumbers(n1: number, n2: number) {
    return n1 + n2;
}

const result = addNumbers(5, 2.8);

let a = 5;

// tuple is any array has fixed length and data types

// assigned 0, 1 (incrementing values)
enum Role { ADMIN, STAFF };

const personObj: {
    name: string;
    age: number;
    hobbies: string[]
    role: [string, number] // tuple
} = {
    name: 'amit',
    age: 34,
    hobbies: ['play', 'read'],
    role: ['admin', 2]  // tuple
}

personObj.role.push(45);

console.log(personObj);
