import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  store_id: null,
  stores: null,
  selectedStore: null
};

export const itemsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStoreID: (state, action) => {
      state.store_id = action.payload;
    },
    setStores: (state, action) => {
      state.stores = action.payload;
    },
    setSelectedStores: (state, action) => {
      state.selectedStore = action.payload;
    },
    clearStoreID: (state, action) => {
      state.store_id = null;
      state.stores= null
    },
  },
});

export const {setStoreID, clearStoreID, setStores, setSelectedStores} = itemsSlice.actions;
export default itemsSlice.reducer;