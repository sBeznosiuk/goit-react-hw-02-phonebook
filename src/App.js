import React, { Component } from 'react'
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Form from './Components/Form';



class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  
  addContact = (contact) => {
    this.setState(prev => ({contacts: [...prev.contacts, contact], name: contact.name}))
  }

  handleFilter = (e) => {
    const { value } = e.target;
    this.setState({filter: value})
  }

  onClickRemove = (e) => {
        e.preventDefault()
        this.setState(prev => ({contacts: [...prev.contacts.filter(i => i.id !== e.target.id)]}))
    }
      
    
  
  render() {
    return (
      <>
        <Form addContact={this.addContact} contacts={this.state.contacts} />
        <h2>Contacts</h2>
        <Filter filter={this.handleFilter}/>
        <ContactList contacts={this.state.contacts} filter={this.state.filter} onClickRemove={this.onClickRemove} />
        </>
    );
  }
}

export default App;

