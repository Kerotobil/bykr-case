import { country } from '../../types';
import { axiosClient } from './axiosInstance';

export async function getCountries() {
  const { data } = await axiosClient.get('all');
  return data as country[];
}
export async function getCountry(name: string) {
  const { data } = await axiosClient.get(`name/${name}`);
  return data as country[];
}
