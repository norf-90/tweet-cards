const redactValue = value => {
  if (value <= 999) return value;
  return value
    .split('')
    .reverse()
    .map((element, index, array) => {
      const isMultipleOf3 = (index + 1) % 3 === 0;
      const isLast = array.length === index + 1;
      return isMultipleOf3 && !isLast ? `,${element}` : element;
    })
    .reverse()
    .join('');
};

export default redactValue;
