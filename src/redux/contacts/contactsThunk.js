import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://640af14365d3a01f980b6dbf.mockapi.io'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
        const response = await axios.get('/Contacts');
        console.log(response.data);
      return response.data;
    } catch (error) {
       console.log(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    try {
      const response = await axios.post('/Contacts', { name, phone });
      return response.data;
    } catch (error) {
     console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        try {
            const response = await axios.delete(`/Contacts/${id}`);
            return response.data;
        } catch (error) {
         console.log(error);   
        }
    }
);