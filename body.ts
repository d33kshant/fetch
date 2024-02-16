export function convertStringToObject(input: string): Record<string, any> {
  const parts = input.split(':');
  let nestedObject: any = {};
  let currentObject = nestedObject;

  for (let i = 0; i < parts.length - 2; i++) {
    const key = parts[i];
    currentObject[key] = {};
    currentObject = currentObject[key];
  }

  const lastKey = parts[parts.length - 2];
  const lastValue = parts[parts.length - 1];

  currentObject[lastKey] = lastValue.startsWith('[') && lastValue.endsWith(']')
    ? lastValue.substring(1, lastValue.length - 1).split(',').map(item => item.trim())
    : lastValue;

  return nestedObject;
}