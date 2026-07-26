export const format = (name, number) => {
  const suffix = ordinalSuffix(number);
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};

function ordinalSuffix(number) {
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  }

  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};