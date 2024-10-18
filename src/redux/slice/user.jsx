import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  merchant_number: null,
  loginToken: null,
  merchantDetails:null,
};

export const itemsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setLoginToken: (state, action) => {
      state.loginToken = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
    setMercahntNumber: (state, action) => {
      state.merchant_number = action.payload;
    },
    clearToken: state => {
      state.token = null;
      state.merchant_number = null;
    },
    setMerchantDetails: state => {
      state.merchantDetails = null;
      
    },
  },
});

export const {setToken, clearToken, setMercahntNumber, setLoginToken,setMerchantDetails} = itemsSlice.actions;
export default itemsSlice.reducer;
