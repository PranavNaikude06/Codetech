export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const formatTemperature = (temp, unit = 'C') => {
  if (temp === null || temp === undefined) return '';
  const value = unit === 'F' ? celsiusToFahrenheit(temp) : temp;
  return `${Math.round(value)}°${unit}`;
};
