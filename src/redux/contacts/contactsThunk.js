import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://640af14365d3a01f980b6dbf.mockapi.io'

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (__, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        console.log(response.data);
      return response.data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    try {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (error) {
     
    }
  }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            
        }
    }
);