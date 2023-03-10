import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsThunk';
import css from './ContactItem.module.css'

export const ContactItem = ({ id, name, number, }) => {
    const dispatch = useDispatch();
    
   return <>
        <li className={css.item} key={id}>
            <p className={css.text}>{name}: {number}</p>
            <button className={css.btn} type="button" onClick={()=>dispatch(deleteContact(id))}>Delete</button>
        </li>
    </>
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};