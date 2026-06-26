export const getWeatherIconUrl = (iconCode) => {
  if (!iconCode) return '';
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
