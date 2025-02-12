let student = {
    name: "Ariana Grande",
    age: 21,
    city: "Gaibandha",
    isStudent: true,
};
let count = 0;
for (const properties in student) {
    count += 1;
}
console.log(count)