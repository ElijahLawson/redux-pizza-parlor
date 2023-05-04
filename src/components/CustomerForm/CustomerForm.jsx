import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CustomerForm() {
    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={(event) => {handleSubmit()}}>
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
        </form>
    )
}

export default CustomerForm;