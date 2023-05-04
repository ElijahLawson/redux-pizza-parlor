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
        <div className="grid grid-cols-1 border-4 mb-8">
            
            <div className="flex flex-col justify-center">
                <img className="h-auto pb-4"src={pizza.image_path}/>
                
                <h2 className="text-2xl">{pizza.name}</h2>
                <p className="text-sm text-center m-auto">{pizza.description}</p>
                <p className="text-right m-auto">${pizza.price}</p>
                
                <button 
                className="w-1/2 ml-auto mr-auto text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                onClick={handleAddRemovePizza}>{!isInCart ? 'Add' : 'Remove'}
                </button>
            </div>

        </div>
    )
}

export default PizzaItem;