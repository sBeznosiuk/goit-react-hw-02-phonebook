import React from 'react'

const ContactListItem = ({ id, name, number, onClickRemove }) => (
            
            <li>{name}: {number} <button type="button" id={id} onClick={onClickRemove}>delete</button></li>
);

export default ContactListItem;