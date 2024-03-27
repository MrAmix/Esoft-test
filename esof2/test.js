function deepCopy(obj, clonedObjects = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (clonedObjects.has(obj)) {
    return clonedObjects.get(obj);
  }

  let clone = Array.isArray(obj) ? [] : {};

  clonedObjects.set(obj, clone);

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] =
        typeof obj[key] === "object" && obj[key] !== null
          ? deepCopy(obj[key], clonedObjects)
          : obj[key];
    }
  }

  return clone;
}

// Пример использования
let originalObj = {
  name: "Jon",
  age: 26,
  address: {
    city: "Moscow",
    country: "Russia",
  },
};

let copiedObj = deepCopy(originalObj);
originalObj.address.city = "City";

console.log(originalObj);
console.log(copiedObj);
