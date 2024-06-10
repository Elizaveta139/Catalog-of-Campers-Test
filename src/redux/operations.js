import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66606a575425580055b3cb7d.mockapi.io';

export const fetchCampersAll = createAsyncThunk('adverts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCampersPage = createAsyncThunk(
  'adverts/fetchPage',
  async ({ page }, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', { params: { page: page, limit: 4 } });
      console.log('response', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
