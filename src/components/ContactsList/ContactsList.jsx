import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllContacts } from 'redux/contacts/contactsThunk';
import { selectFilteredContacts } from 'redux/contacts/contactsSelector';


export const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(getAllContacts());
    }, [dispatch]);
    
  
   
   return <>
        <ul>
            {filteredContacts.map(({ id, name, number }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
            />)}
        </ul>
    </>
}

