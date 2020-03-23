import React from 'react';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            return <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            return (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            return <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            return <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            return <div className={classes.Salad}></div>;
            break;
        case ('bacon'):
            return <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;

    }

    return ingredient;

}

export default burgerIngredient;