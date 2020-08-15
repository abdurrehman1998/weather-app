import { TemperatureUnit } from "../app/types";

const temperatureUnit:TemperatureUnit="metric";
export const environment = {
  production: true,
  baseURL:"https://api.openweathermap.org/data/2.5",
  APIKey:"612fc5ea0db871f70f6abb1257be00de",
  temperatureUnit
};
