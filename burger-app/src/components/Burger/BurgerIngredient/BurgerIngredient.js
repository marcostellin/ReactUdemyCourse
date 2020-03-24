import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render () {

        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                return <div className={classes.BreadBottom}></div>;
            case ('bread-top'):
                return (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
            case ('meat'):
                return <div className={classes.Meat}></div>;
            case ('cheese'):
                return <div className={classes.Cheese}></div>;
            case ('salad'):
                return <div className={classes.Salad}></div>;
            case ('bacon'):
                return <div className={classes.Bacon}></div>;
            default:
                ingredient = null;

        }

        return ingredient;
    };
} 

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;