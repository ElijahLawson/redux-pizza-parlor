import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Checkout() {
    const currentCustomer = useSelector(store => store.currentCustomer);
    const cart = useSelector(store => store.cart);

    const total = () => {
        let totalAmount = 0
        for(let prices of cart) {
            totalAmount += Number(prices.price)
        }
        return Number(totalAmount)
    }

    return (
        <>
            <h3>{currentCustomer.name}</h3>
            <h3>{currentCustomer.address}</h3>
            <h3>{currentCustomer.city}</h3>
            <h3>{currentCustomer.type}</h3>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                </tr>
                            )
                        })
                    }
                     <tr>
                        <td>${total()}</td>
                    </tr>
                </tbody>
               
                   
                
            </table>
        
        </>
    )
}
export default Checkout;