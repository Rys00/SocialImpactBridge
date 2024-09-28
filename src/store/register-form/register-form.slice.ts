import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  signUpData: {
    email: "",
    password: "",
    passwordRepeat: "",
    organizationType: "",
  },
};

export const registerFormSlice = createSlice({
  name: "registerForm",
  initialState: INITIAL_STATE,
  reducers: {
    setSignUpData(state, action) {
      state.signUpData = action.payload;
    },
  },
});

export const { setSignUpData } = registerFormSlice.actions;
export const registerFormReducer = registerFormSlice.reducer;
