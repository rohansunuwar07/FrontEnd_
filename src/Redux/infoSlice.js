import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Rohan",
  age: 22,
  address:['ktm'," province 3"],
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    changeName: (state,action) => {
        state.name= action.payload;
    },
    changeAge: (state,action) => {
        state.age=action.payload;
    },
    changeAddress: (state,action) => {
      state.address= action.payload;
    }
    
  },
});

// Action creators are generated for each case reducer function
export const {changeName,changeAge,changeAddress} = infoSlice.actions;

export default infoSlice.reducer;
