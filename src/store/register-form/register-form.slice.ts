import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  signUpData: {
    email: "",
    password: "",
    passwordRepeat: "",
    organizationType: "ngo",
  },
  ngoData: {
    krs: "",
    nazwa: "",
    nip: "",
    regon: "",
    kraj: "",
    wojewodztwo: "",
    powiat: "",
    gmina: "",
    miejscowosc: "",
    adres: "",
    mail: "",
    adresStrony: "",
    data: "",
    celDzialania: "",
  },
};

export const registerFormSlice = createSlice({
  name: "registerForm",
  initialState: INITIAL_STATE,
  reducers: {
    setSignUpData(state, action) {
      state.signUpData = action.payload;
    },
    setNgoData(state, action) {
      state.ngoData = action.payload;
    },
  },
});

export const { setSignUpData, setNgoData } = registerFormSlice.actions;
export const registerFormReducer = registerFormSlice.reducer;
