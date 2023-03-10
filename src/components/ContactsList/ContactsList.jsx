import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import { selectFilteredContacts } from 'redux/contacts/contactsSelector';


export const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
   
  const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
    
  
    console.log("ContactsList ~ filteredContacts:", filteredContacts)
   return <>
        <ul>
            {filteredContacts.map(({ id, name, phone }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={phone}
            />)}
        </ul>
    </>
}

