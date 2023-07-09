interface ObjectWithCount {
  object: object;
  count: number;
}

export function countSimilarObjects(arr: object[]): ObjectWithCount[] {
  const countMap: { [key: string]: number } = {};
  const result: ObjectWithCount[] = [];

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const objString = JSON.stringify(obj);

    if (countMap[objString]) {
      countMap[objString]++;
    } else {
      countMap[objString] = 1;
    }
  }

  // Create array of objects with count
  for (const key in countMap) {
    const count = countMap[key];
    const obj = JSON.parse(key);
    result.push({ object: obj, count: count });
  }

  return result;
}

// Example usage:
const objects = [
  {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Averta CY",
    fontSize: 39,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "103.1%",
  },
  {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Averta CY",
    fontSize: 39,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "103.1%",
  },
  {
    color: "rgba(0, 0, 0, 0.69)",
    textAlign: "center",
    fontFamily: "Averta CY",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "128.1%",
  },
];

const result = countSimilarObjects(objects);
console.log(result);
