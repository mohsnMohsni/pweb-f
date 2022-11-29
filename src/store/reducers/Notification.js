import { createSlice } from "@reduxjs/toolkit";
//  notification setting for snackbar provider and it messages

const initialState = {
  messages: [],
};

const slice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    onOpen(
      state,
      data
    ) {
      // this fn will remove old message if length go over 5
      if (state.messages.length >= 5) {
        state.messages = state.messages.slice(1, 4);
      }
      state.messages.push({
        message: data.payload?.message,
        id: '',
        open: true,
        severity: data.payload?.severity,
      });
    },
    onClose(state, data) {
      const newMessage = state.messages.filter(
        (item) => item.id !== data.payload
      );

      state.messages = newMessage;
    },
  },
});

export const { reducer } = slice;

export const { onClose, onOpen } = slice.actions;

export default slice;
