// src/lib/kal-api.ts
import axios from 'axios';

const kalApi = axios.create({
  baseURL: import.meta.env.KAL_API_URL || 'https://kalori-api.my',
  headers: {
    'X-API-Key': import.meta.env.KAL_API_KEY,
    'Content-Type': 'application/json',
  },
});

export interface Food {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  serving_size: string;
}

export const searchFoods = async (query: string): Promise<Food[]> => {
  const { data } = await kalApi.get('/api/foods/search', {
    params: { q: query },
  });
  return data.data;
};

export const searchHalalFoods = async (query: string): Promise<Food[]> => {
  const { data } = await kalApi.get('/api/halal/search', {
    params: { q: query },
  });
  return data.data;
};

export default kalApi;