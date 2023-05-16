import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => handlePending(state))
      .addCase(addContact.pending, state => handlePending(state))
      .addCase(deleteContact.pending, state => handlePending(state))
      .addCase(updateContact.pending, state => handlePending(state))

      .addCase(fetchContacts.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(addContact.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(deleteContact.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(updateContact.rejected, (state, action) =>
        handleRejected(state, action)
      )

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items[index].number = action.payload.number;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
