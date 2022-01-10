import React from 'react';
import { useSelector } from 'react-redux';
import LogIn from '../components/logIn';
function UserPage() {
    const isLoggedIn = useSelector((state) => { return state.isLoggedIn });
    const activeUser = useSelector((state) => { return state.activeUser });
    const activeUserID = useSelector((state) => { return state.activeUserID });
    return (
        <div>
            {isLoggedIn ?
                <div>
                    <h1>Welcome, {activeUser}!</h1>
                    {/* TO DO:
                    miniversion av alla pages, alternativt endast dagens entry,
                     och om inget finns skrivet för dagen så visa tom, så det
                     syns tydligt så en kan klicka sig in å fixa det dirr
                     
                     om flera finns för dagens datum visa alla? eller bara dagens?*/}
                </div>
                :
                <div>
                    <h1>please log in</h1>
                    <LogIn />
                </div>
            }
        </div>
    );
}

export default UserPage;