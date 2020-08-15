import { TemperatureUnit } from "../app/types";

const temperatureUnit:TemperatureUnit="metric";
export const environment = {
  production: true,
  baseURL:"https://api.openweathermap.org/data/2.5",
  APIKey:"xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  temperatureUnit
};
