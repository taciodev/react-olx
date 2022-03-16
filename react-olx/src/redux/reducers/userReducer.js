import createSlice from '@reactjs/toolkit';
 
const slice = createSlice({
  name: 'user',
  initialState: {
    name: 'Taciano'
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { setName } = slice.actions;
export default slice.reducer;