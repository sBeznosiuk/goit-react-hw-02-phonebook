import React, { Component } from 'react'
import { v4 as uuidv4} from 'uuid'

class Form extends Component {
    state = {
        name: '',
        number: '',
        id: '',
    }
    
    onHandleChange = (e) => {
        const { value, name } = e.target
        this.setState({[name]: value, id: uuidv4()})
    }

    onHandleSubmit = (e) => {
        e.preventDefault()

         const refs = {
            name: document.getElementById('name-input'),
            number: document.getElementById('number-input'),

        }

        if (!this.props.contacts.includes(this.state)) {
            this.props.addContact(this.state)
        } else {
            alert(`${this.state.name} is already in contacts.`)
        }

       
        refs.name.value = '';
        refs.number.value = '';

    }
    render() {
        return (
            <form action="submit" onSubmit={this.onHandleSubmit}>
            <label htmlFor="name">
                <strong>Name:</strong>
                    <input
                        id="name-input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                   onChange={this.onHandleChange}
                    required
                />
                </label>
                <label htmlFor="number">
                <strong>Number:</strong>
                    <input
                        id="number-input"
                    type='number'
                    name="number"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                   onChange={this.onHandleChange}
                    required
                />
                </label>
            <button type='submit'>Add contact</button>
        </form>
        );
    }
}

export default Form;