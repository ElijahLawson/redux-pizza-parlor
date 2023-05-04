import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CustomerForm() {
    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');
    const [orderMethod, setOrderMethod] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch customer info to store?
        const customerInput = {
            name: nameInput,
            address: addressInput,
            city: cityInput,
            zip: zipInput,
            type: orderMethod 
        }
        console.log('Here is our customer:', customerInput)
        dispatch({
            type: 'CREATE_CUSTOMER',
            payload: customerInput
        })
        clearFields();
    }

    const clearFields = () => {
        setNameInput('');
        setAddressInput('');
        setCityInput('');
        setZipInput('');
        setOrderMethod('');
    }
    // onSubmit={(event) => {handleSubmit()
    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="name" 
                value={nameInput}
                onChange={(event) => {setNameInput(event.target.value)}}
            />
            <input 
                placeholder="street address" 
                value={addressInput}
                onChange={(event) => {setAddressInput(event.target.value)}}
            />
            <input 
                placeholder="city" 
                value={cityInput}
                onChange={(event) => {setCityInput(event.target.value)}}
            /> 
            <input 
                placeholder="zip" 
                value={zipInput}
                onChange={(event) => {setZipInput(event.target.value)}}
            />
            {/* vvvv NEED ALERT TO MAKE SURE USER PICKS DELIVERY OPTION vvvv */}
            <input 
                type='radio'
                name='order-method'
                value='pickup'
                id='pickup'
                checked={orderMethod === 'pickup'}
                onChange={(event) => {setOrderMethod(event.target.value)}}
            />
            <label>Pickup</label>
            <input 
                type='radio'
                name='order-method'
                value='delivery'
                id='delivery'
                checked={orderMethod === 'delivery'}
                onChange={(event) => {setOrderMethod(event.target.value)}}
            />
            <label>Delivery</label>
            {/* vvvvv THIS IS A PLACEHOLDER FOR NOW vvvv */}
            <button type='submit'>NEXT</button>
        </form>
    )
}

export default CustomerForm;