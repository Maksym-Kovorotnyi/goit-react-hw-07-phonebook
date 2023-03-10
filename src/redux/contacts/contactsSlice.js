import { createSlice } from '@reduxjs/toolkit';
import { contactsInitalState } from './contactsInitialState';
import { addContact, deleteContact, getAllContacts } from './contactsThunk';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitalState,
  extraReducers: {
    [getAllContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [getAllContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [getAllContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;





