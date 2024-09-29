import { createSlice } from "@reduxjs/toolkit";

type State = {
  signUpData: {
    email: string;
    password: string;
    passwordRepeat: string;
    organizationType: string;
  };
  ngoData: {
    krs: string;
    nazwa: string;
    nip: string;
    regon: string;
    kraj: string;
    wojewodztwo: string;
    powiat: string;
    gmina: string;
    miejscowosc: string;
    adres: string;
    mail: string;
    adresStrony: string;
    data: string;
    celDzialania: string;
    przedmiotyDzialalnosci: string[];
  };
  businessData: {
    krs: string;
    nazwa: string;
    nip: string;
    regon: string;
    kraj: string;
    wojewodztwo: string;
    powiat: string;
    gmina: string;
    miejscowosc: string;
    adres: string;
    mail: string;
    adresStrony: string;
    data: string;
  };
  volunteerData: {
    name: string;
    surname: string;
    birthDate: string;
    experience: {
      name: string;
      date: string;
      responsibility: string;
      description: string;
    }[];
  };
};

const INITIAL_STATE: State = {
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
    przedmiotyDzialalnosci: [],
  },
  businessData: {
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
  },
  volunteerData: {
    name: "",
    surname: "",
    birthDate: "",
    experience: [],
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
    setBusinessData(state, action) {
      state.businessData = action.payload;
    },
    setVolunteerData(state, action) {
      state.volunteerData = action.payload;
    },
  },
});

export const { setSignUpData, setNgoData, setBusinessData, setVolunteerData } =
  registerFormSlice.actions;
export const registerFormReducer = registerFormSlice.reducer;
