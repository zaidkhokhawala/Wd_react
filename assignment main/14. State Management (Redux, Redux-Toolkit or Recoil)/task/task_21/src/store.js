<<<<<<< HEAD
import { configureStore, createSlice } from '@reduxjs/toolkit';

const crudSlice = createSlice({
  name: 'crud',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    updateItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = crudSlice.actions;

const store = configureStore({
  reducer: { crud: crudSlice.reducer },
});

export default store;
=======
import { configureStore, createSlice } from '@reduxjs/toolkit';

const crudSlice = createSlice({
  name: 'crud',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    updateItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = crudSlice.actions;

const store = configureStore({
  reducer: { crud: crudSlice.reducer },
});

export default store;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
