import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

// classbased components
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            bacon: 1,
            cheese: 2,
            meat: 3,
            salad: 1
        }
    };


    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Burger Controls</div>

            </Aux>
        );
    }
};




export default BurgerBuilder;
