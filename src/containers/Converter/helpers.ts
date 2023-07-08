export function transformCSSCode(cssCode: string): Record<string, string | number> {
  const lines = cssCode.trim().split(';');
  const styles: Record<string, string | number> = {};

  lines.forEach(line => {
    const [property, value] = line.split(':').map(part => part.trim());
    const transformedProperty = property.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());

    styles[transformedProperty] = isQuotedProperty(transformedProperty) ? value.replace(/["']/g, '') : value;
  });

  return styles;
}

function isQuotedProperty(property: string): boolean {
  return ['color', 'textAlign', 'fontFamily', 'fontSize', 'fontStyle'].includes(property);
}

// const cssCode = `
//   color: #FFF;
//   text-align: center;
//   font-family: Averta CY;
//   font-size: 39px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 103.1%;
// `;

// const transformedStyles = transformCSSCode(cssCode);
// console.log(transformedStyles);
