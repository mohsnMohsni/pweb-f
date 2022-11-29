//  general setting such as theme switch
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "LIGHT",
};

const slice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "DARK" ? "LIGHT" : "DARK";
    },
  },
});

export const { reducer } = slice;

export const changeTheme = () => (dispatch) => {
  dispatch(slice.actions.changeTheme());
};

export default slice;
