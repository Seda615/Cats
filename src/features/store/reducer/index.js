import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../../../core/service';

const initialState = {
  cats: [],
  categories: [],
  categoriesId: "",
  getCatsStatus: 'idle',
  getCategoriesStatus: 'idle'
};

export const getCats = createAsyncThunk(
  'cats/fetchCat',
  ({ categoriesId}) => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoriesId}`
    return Service.request(url)
  }
);

export const addCats = createAsyncThunk(
    'cats/addCat',
    ({ categoriesId}) => {
      const url = `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoriesId}`
      return Service.request(url)
    }
  );

export const getCategories = createAsyncThunk(
    'category/fetchCategory',
    () => {
        const url = 'https://api.thecatapi.com/v1/categories'
        return Service.request(url)
    }
)



export const counterSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    changeCategoriesId: (state, action) => {
        state.categoriesId = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCats.pending, (state) => {
        state.getCatsStatus = 'loading';
      })
      .addCase(getCats.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cats = action.payload;
      })
      .addCase(addCats.pending, (state) => {
        state.getCatsStatus = 'loading';
      })
      .addCase(addCats.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cats = [...state.cats, ...action.payload];
      })
      .addCase(getCategories.pending, (state) => {
        state.getCategoriesStatus = 'loading';
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
  },
});

export const {changeCategoriesId} = counterSlice.actions;

export default counterSlice.reducer;
