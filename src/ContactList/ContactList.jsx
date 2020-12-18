import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, onRemove }) {
    return (
        <ul className={styles.contactList} >
            {contacts.map(contact => (
                <li className={styles.listItem} key={contact.id}>
                    {contact.name} : {contact.number}
                    <button type="button" className={styles.button} onClick={() => onRemove(contact.id)}>Delete</button>
                </li>
            ))
            }
        </ul>
    )
};


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
};

