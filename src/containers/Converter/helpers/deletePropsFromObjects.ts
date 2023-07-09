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
  console.log(propsToDelete)

  for (const item of arr) {
    const obj = { ...item.object };

    for (const prop of propsToDelete) {
      delete obj[prop];
    }

    result.push({ count: item.count, object: obj });
  }

  return result;
}
