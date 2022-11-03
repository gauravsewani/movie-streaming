import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
    default: (state, action) => {
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => ({ obj: state }.obj);
export default userSlice.reducer;
