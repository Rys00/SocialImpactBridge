import { combineReducers } from "@reduxjs/toolkit";
import { registerFormReducer } from "./register-form/register-form.slice";

export const rootReducer = combineReducers({
  registerForm: registerFormReducer,
});
