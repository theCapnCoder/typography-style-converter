interface MyObject {
  color?: string;
  textAlign?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: number;
  lineHeight?: string;
  [key: string]: any;
}

interface ObjectWithCount {
  count: number;
  object: MyObject;
}

export function deletePropsFromObjects(arr: ObjectWithCount[], propsToDelete: string[]): ObjectWithCount[] {
  const result: ObjectWithCount[] = [];

  for (const item of arr) {
    const obj = { ...item.object };
    console.log({item, obj})

    for (const prop of propsToDelete) {
      delete obj[prop];
    }

    result.push({ count: item.count, object: obj });
  }

  return result;
}

// Example usage:
const objects: ObjectWithCount[] = [
  {
    "count": 1,
    "object": {
      "color": "#FFF",
      "textAlign": "center",
      "fontFamily": "Averta CY",
      "fontSize": 39,
      "fontStyle": "normal",
      "fontWeight": 600,
      "lineHeight": "103.1%"
    }
  },
  {
    "count": 1,
    "object": {
      "color": "#FFF",
      "fontFamily": "Averta CY",
      "fontSize": 16,
      "fontStyle": "normal",
      "fontWeight": 400,
      "lineHeight": "148.6%"
    }
  }
];

