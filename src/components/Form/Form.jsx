import css from './Form.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contacts/contactsThunk';

export const Form = ()=> {
  const [name, setName] = useState('');
  const [number, setNumber]= useState('')

  const contacts = useSelector(state => state.contacts.items);
  
  const dispatch = useDispatch();
 

const handleChange = (e) => {
  const { name } = e.target
  switch (name) {
    case 'name':
      setName(e.target.value)
      break;
    case 'number':
      setNumber(e.target.value)
      break;
    default:
      throw new Error('error');
  }
  
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(contact));
    }

    setName('');
    setNumber('');
  }

  console.log(contacts);
    return (<>
  < form className={css.form} onSubmit={handleSubmit} >
<label className={css.label} htmlFor="name">Name</label>
        <input className={css.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
        />
        
      <label className={css.label} htmlFor="number">Number</label>
        <input className={css.input}
          value={number}
      onChange={handleChange}
      type="tel"
      name="number"
      required
      />
      <button className={css.btn} type="submit">Add contact</button>
      </form>

  </>)
  
}
