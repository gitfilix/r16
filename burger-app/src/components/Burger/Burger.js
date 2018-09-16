//Functional compoent
import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    // console.log("burger props:", props);
    // Object.keys methods transformes(returns) object keys (NOT Values) into an array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // create an Array with spread operator for props ingredients
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // console.log("props.ingredients", props.ingredients);
                //console.log("igKey", igKey);
                return <BurgerIngredient key={igKey + 1} type={igKey} />
            });
        })
        // flatten array by reduce
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>please add some ingredients!</p>
        }
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
