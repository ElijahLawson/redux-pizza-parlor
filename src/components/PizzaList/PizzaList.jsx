import { useSelector } from "react-redux";
import PizzaItem from "./PizzaItem/PizzaItem";


function PizzaList() {
    const pizzas = useSelector(store => store.pizzas);
    console.log(pizzas)
    return(
        <div>
            {pizzas.map(pizza => {
                return(
                    <PizzaItem 
                        key={pizza.id}
                        pizza={pizza}/>
                )
            })}
        </div>
    )
}

export default PizzaList;