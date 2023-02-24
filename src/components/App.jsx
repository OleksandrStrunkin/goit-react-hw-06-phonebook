import ContactList from './ContactList/ContactLIst';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector, useDispatch} from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

import { getAllContacts } from 'redux/contacts/contacts-selectors';





export default function App() {
 const contacts = useSelector(getAllContacts);
const filter = useSelector(getFilter);

 const dispatch = useDispatch();


  const onAddContact = (name, number) => {
    let names = contacts.map(cont => cont.name.toLocaleLowerCase());
      if (names.includes(name.toLocaleLowerCase())) {
      alert(`Список вже має ім'я ${name}`);
      return;
    }

    dispatch(addContact({name, number}));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <>
      <ContactForm  addContact={onAddContact}/>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList contacts={visibleContacts}  deleteContact={onDeleteContact}/>
    </>
  );
}
