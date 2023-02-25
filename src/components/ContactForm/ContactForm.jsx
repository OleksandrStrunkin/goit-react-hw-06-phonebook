import { useState } from 'react';
import styled from './ContactForm.module.css';
import { addContact } from 'redux/contacts/contacts-slice';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleName = e => {
    setName(e.currentTarget.value);
  };

  const handleNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={styled.form}>
      <label className={styled.name}>
        Ім'я
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleName}
        />
      </label>
      <label className={styled.number}>
        Номер
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumber}
        />
      </label>
      <button type="submit" className={styled.button}>
        Зберегти
      </button>
    </form>
  );
}