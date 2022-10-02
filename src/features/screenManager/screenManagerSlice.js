import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screen: 'categoriesScreen'
}

const screenManagerSlice = createSlice({
  name: 'screenManager',
  initialState,
  reducers: {
    setScreen: (state, payload) => {
      state.screen = payload.payload;
    }
  },
});


export const { setScreen } = screenManagerSlice.actions;
export default screenManagerSlice.reducer;