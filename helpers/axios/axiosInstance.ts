import Axios from 'axios';

export const axiosClient = Axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});
