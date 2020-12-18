import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
    return (
        <div className={styles.container}>
            <label htmlFor="filter">Find contacts by name</label>
            <input
                id="filter"
                type="text"
                name="filter"
                value={value}
                className={styles.input}
                onChange={e => onChangeFilter(e.target.value)}
            />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};