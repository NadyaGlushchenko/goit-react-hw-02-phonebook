import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        number: '',
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        const { name, number } = this.state;
        e.preventDefault();
        this.props.onSubmit(name, number);
        this.setState({ name: '', number: '' });
    }

    handleChange = this.handleChange.bind(this);

    render() {
        const { name, number } = this.state;
        return <form id="form" className={styles.form} onSubmit={this.onSubmit}>
            <label> Name
                <input type="text" name="name" value={name} className={styles.input} onChange={this.handleChange} required />
            </label>
            <label> Number
                <input type="tel" name="number" value={number} className={styles.input} onChange={this.handleChange} required />
            </label>
            <button form="form" type="submit" className={styles.button} >Add contact</button>
        </form>
    };
};

export default ContactForm;
