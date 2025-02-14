let myObject = {
    name: "John Doe",
    age: 25,
    city: "New York city",
    isStudent: true,
};
const keys = Object.keys(myObject);
const values = Object.values(myObject);
// 1st method
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log("Key:", key, "| type:", typeof myObject[key]);
}
// 2nd mathod
for (const key of keys) {
    console.log("Key:", key, "| type:", typeof myObject[key]);
}
// 3rd method
for (const properties in myObject) {
    console.log("Key:", properties, "| type:", typeof myObject[properties]);
}
//4th method
for (let i = 0; i < keys.length; i++) {
    console.log("Key:", keys[i], "| type:", typeof values[i]);
}
