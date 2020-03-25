import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
                    .map((igKey) => {
                        return ingredients[igKey];
                    })
                    .reduce( (sum, el) => {
                        return sum + el;
                    }, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] + 1;
        this.setState({ingredients: ingredients});
        this.setState({totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]});
        this.updatePurchaseState(ingredients);
    }

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        
        if (ingredients[type] > 0) {
            ingredients[type] = ingredients[type] - 1;
            this.setState({ingredients: ingredients});
            this.setState({totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]});
        } 

        this.updatePurchaseState(ingredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCanceledHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        //alert('You continue!');

        this.setState({loading: true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Marco',
                address: {
                    street: 'Street', 
                    zipCode: '742186',
                    country: 'Italy'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then (res => {
                this.setState({loading: false, purchasing: false});
            })
            .catch (err => {
                this.setState({loading: false, purchasing: false});
            });
    }

    render () {

        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = <OrderSummary 
                            ingredients={this.state.ingredients}
                            purchaseCanceled={this.purchaseCanceledHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                            price={this.state.totalPrice}/>
        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCanceledHandler} >
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    />
            </Aux>
        );
    }

}

export default withErrorHandler(BurgerBuilder, axios);