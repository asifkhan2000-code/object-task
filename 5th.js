let myObject = {
    name: "John Doe",
    age: 25,
    city: "Example City",
    isStudent: true,
};
// 1st method
const keys = Object.keys(myObject);
const values = Object.values(myObject);
for(const key of keys) {
    console.log("Key:", key, "| type:", typeof myObject[key]);
}
// 2nd method
for (const properties in myObject) {
    console.log("Key:", properties, "| type:",typeof myObject[properties]);
}
