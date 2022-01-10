import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../_actions/userActions';

function LogIn() {
    const [value, setValue] = useState('');
    const [id, setId] = useState('');

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => { return state.isLoggedIn });
    // const activeUser = useSelector((state) => { return state.activeUser });


    const handleChange = (event) => {
        setValue(event.target.value);

    }
    const handleSubmit = () => {
        getID();
    }

    function getID() {
        fetch('https://localhost:44302/api/user/' + value)
            .then(response => response.json())
            //if error msg, visa error annars fortsätt med nedanstående
            .then(
                (result) => {
                    return setId(result);
                }
            )
    }
    useEffect(() => {
        dispatch(logIn(value, id));
    }, [id])


    return (
        <div>
            {isLoggedIn ?
                <div>

                </div>
                :
                <form>
                    <label htmlFor='userName'>log in: </label>
                    <input type='text' id='userName' onChange={handleChange} />
                    <div onClick={handleSubmit}>log in</div>
                </form>
            }

        </div>
    )
}



export default LogIn;