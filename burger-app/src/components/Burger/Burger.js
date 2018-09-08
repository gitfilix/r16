//Functional compoent
import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    console.log("burger props:", props);
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log("props.ingredients", props.ingredients);
                console.log("igKey", igKey);
                return <BurgerIngredient key={igKey + 1} type={igKey} />
            });
        });
    console.log("transformedIngredients", transformedIngredients);

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
