
import styled from './ContactList.module.css'
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);
  
    const onDeleteContact = id => {
      dispatch(deleteContact(id));
    };
     return (
         <ul className={styled.list}>
             {contacts.map((contact) => {
                 return (  
                         <li className={styled.listItem} key={nanoid()}>{contact.name}<p>{contact.number}</p>
                            <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
                         </li>
                 )
             } )}
            </ul>
     )
}

export default ContactList
