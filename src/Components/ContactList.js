import React from 'react';
import ContactListItem from './ContactListItem';
import { StyledList } from './styles';

const ContactList = ({ contacts, filter, onClickRemove }) => {
  const renderItems = () => {
    if (filter) {
      return contacts.map(
        contact =>
          contact.name.includes(filter) && (
            <ContactListItem
              onClickRemove={onClickRemove}
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              contacts={contacts}
            />
          ),
      );
    } else {
      return contacts.map(
        contact =>
          contact.name.includes(filter) && (
            <ContactListItem
              onClickRemove={onClickRemove}
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              contacts={contacts}
            />
          ),
      );
    }
  };

  return <StyledList>{renderItems()}</StyledList>;
};

export default ContactList;
