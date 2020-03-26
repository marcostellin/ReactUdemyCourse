import React from 'react';
import classes from './Order.css';

const order = (props) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: </p>
            <p>Price <strong>5.67 $</strong></p>
        </div>
    );
}

export default order;