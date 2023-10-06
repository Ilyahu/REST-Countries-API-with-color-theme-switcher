import axios from "axios";
import { Country } from "../pages/Home/HomePage";

const BASE_URL = 'https://restcountries.com/v3.1/';

const countriesApi = axios.create({
  baseURL: BASE_URL
})

const ALL_COUNTRIES = 'all?fields=name,capital,flags,population,region';

export const getAllCountries = async () => {
  const response = await countriesApi.get(ALL_COUNTRIES)
  return response.data;
}

export const getCountryDetails = async (name: string) => {
  const response = await countriesApi.get('name/' + name)
  return response.data[0];
}

export const getFilteredByRegion = async (codes: string[]) => {
  const response = await countriesApi.get('alpha?codes=' + codes.join(','))
  return response.data.map((country:Country) => country.name.common);
}
