const transformValue = (prop: string, value: string) => {
  if (prop === 'fontSize' || prop === 'fontWeight'){
    return parseInt(value)
  }
  return value;
}

function transformCSSCode(cssCode: string): Record<string, string | number> {
  const lines = cssCode.trim().split(';');
  const styles: Record<string, string | number> = {};

  lines.forEach(line => {
    const [property, value] = line.split(':').map(part => part.trim());
    const transformedProperty = property.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());

    // styles[transformedProperty] = isQuotedProperty(transformedProperty) ? value.replace(/["']/g, '') : value;
    styles[transformedProperty] = transformValue(transformedProperty, value)
  });

  return styles;
}

function isQuotedProperty(property: string): boolean {
  return ['color', 'textAlign', 'fontFamily', 'fontSize', 'fontStyle'].includes(property);
}


export default transformCSSCode;
