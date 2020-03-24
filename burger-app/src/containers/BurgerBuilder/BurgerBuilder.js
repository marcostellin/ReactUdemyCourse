import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] + 1;
        this.setState({ingredients: ingredients});
        this.setState({totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]});
    }

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        
        if (ingredients[type] > 0) {
            ingredients[type] = ingredients[type] - 1;
            this.setState({ingredients: ingredients});
            this.setState({totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]});
        } 
    }

    render () {

        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    />
            </Aux>
        );
    }

}

export default BurgerBuilder;