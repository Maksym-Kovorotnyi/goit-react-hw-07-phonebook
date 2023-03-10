import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import {Filter} from './Filter/Filter'




export const App = ()=> {
      return (<>
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactsList/>
      </>)
    
  }

