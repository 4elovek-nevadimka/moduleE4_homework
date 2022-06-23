// task 1
function getOwnProperties(anyObject) {  
  for (let prop in anyObject) {
    if (anyObject.hasOwnProperty(prop)) {
        console.log(prop + " - " + anyObject[prop]);
    }
  }
}

let person = 
    {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

getOwnProperties(person);



// task 2
function isPropertyExists(propName, anyObject) {
  return propName in anyObject;
}

console.log(isPropertyExists("lastName", person))
console.log(isPropertyExists("lastname", person))
console.log(isPropertyExists("toString", person))



// task 3
function createEmptyObject() {
  return Object.create(null)
}

const emptyObject = createEmptyObject();

console.log(emptyObject)

console.log(Object.getPrototypeOf(emptyObject))