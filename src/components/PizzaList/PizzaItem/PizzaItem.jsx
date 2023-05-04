import { useDispatch } from "react-redux";
import { useState } from "react";

function PizzaItem(props) {
    
    const id = props.id;
    const pizza = props.pizza;

    const [isInCart, setIsInCart] = useState(false);
    const dispatch = useDispatch();

    function handleAddRemovePizza() {

        (!isInCart) ? setIsInCart(true) : setIsInCart(false);
        
        if (!isInCart) {
            dispatch({
                type: 'ADD_CART_PIZZA',
                payload: pizza
            })
        } else {
            dispatch({
                type: 'REMOVE_CART_PIZZA',
                payload: pizza
            })
        }
    }

    return(
        <div>
            <img src={pizza.image_path}/>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            
            <button onClick={handleAddRemovePizza}>{!isInCart ? 'Add' : 'Remove'}</button>
        </div>
    )
}

export default PizzaItem;