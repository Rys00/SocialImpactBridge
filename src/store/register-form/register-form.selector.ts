import { createSelector } from "reselect";
import { RootState } from "../store";

const selectRegisterForm = (state: RootState) => state.registerForm;

export const selectSignUpData = createSelector(
  [selectRegisterForm],
  (registerFormReducer) => registerFormReducer.signUpData
);

export const selectNgoData = createSelector(
  [selectRegisterForm],
  (registerFormReducer) => registerFormReducer.ngoData
);
