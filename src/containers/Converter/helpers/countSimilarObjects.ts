interface MyObject {
  color: string;
  textAlign: string;
  fontFamily: string;
  fontSize: number;
  fontStyle: string;
  fontWeight: number;
  lineHeight: string;
}

interface ObjectWithCount {
  object: MyObject;
  count: number;
}

export function countSimilarObjects(arr: MyObject[]): ObjectWithCount[] {
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
    const obj = JSON.parse(key) as MyObject;
    result.push({count,  object: obj });
  }

  // Sort objects by fontSize
  result.sort((a, b) => {
    const fontSizeA = a.object.fontSize;
    const fontSizeB = b.object.fontSize;
    return fontSizeB - fontSizeA;
  });

  return result;
}
