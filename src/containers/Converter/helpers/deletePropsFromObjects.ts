interface ObjectWithCount {
  count: number;
  object: {
    [key: string]: any;
  };
}

export function deletePropsFromObjects(arr: ObjectWithCount[], propsToDelete: string[]): { [key: string]: any } {
  const result: { [key: string]: any } = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const obj = { ...item.object };
    const className = `h${i + 1}`;

    for (const prop of propsToDelete) {
      delete obj[prop];
    }

    result[className] = obj;
  }

  return result;
}
