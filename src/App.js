import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
const uuidv1 = require('uuid/v1');

class App extends Component {
  state = {
    contacts: [
      // { name: 'Rosie Simpson', number: '4591256', id: 'id-1' },
      // { name: 'Hermione Kline', number: '4438912', id: 'id-2' },
      // { name: 'Eden Clements', number: '6451779', id: 'id-3' },
      // { name: 'Annie Copeland', number: '2279126', id: 'id-4' },
    ],
    filter: "",
  };

  onSubmit = (name, number) => {
    if (this.state.contacts.find(contact => contact.number === number)) {
      alert(`${name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, {
          name: name,
          number: number,
          id: uuidv1()
        }]
      }));
    };
  };

  changeFilter = filter => {
    this.setState({ filter });
  };


  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  removeContact = id => {
    // console.log(id);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    let show;

    if (visibleContacts.length > 0) {
      (show = <>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={visibleContacts} onRemove={this.removeContact} />
      </>)
    } else if (visibleContacts.length === 0 && contacts.length > 0) {
      (show = <>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
      </>)
    }

    return <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.onSubmit} />
      <h2>Contacts</h2>
      {show}
    </>
  };
};

export default App;

