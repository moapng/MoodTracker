import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserView, MobileView } from 'react-device-detect';

function HabitsPage() {
    const [habits, setHabits] = useState({
        teeth: false, hair: false, skincare: false, plants: false,
        dailyCleaning: false, gym: false, meds: false, pets: false
    });

    const activeUserID = useSelector((state) => { return state.activeUserID });
    const [hDate, setDate] = useState();
    const [id, setId] = useState();

    var today = new Date();

    const handleChange = ({ target }) => {
        const { value, checked } = target;
        //setHabits with spread-operator to keep old values as well
        setHabits((prev) => ({
            ...prev,
            [value]: checked
        }));
        setDate(today.toISOString());
    }

    const handleSubmit = () => {
        setId(crypto.randomUUID());
        fetch('https://localhost:44302/api/habit', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                teeth: habits.teeth,
                hair: habits.hair,
                skincare: habits.skincare,
                plants: habits.plants,
                dailyCleaning: habits.dailyCleaning,
                gym: habits.gym,
                meds: habits.meds,
                pets: habits.pets,
                uId: activeUserID,
                id: id,
                HDate: hDate

            }),
            headers: {
                'Content-type': 'application/json',
            },
        }).catch((error) => { console.error(error); })
    }
    return (
        <>
            <BrowserView>
                <div className='container'>
                    <div className='row'>
                        <h2 className='col offset-1'>Habits</h2>
                    </div>
                    <form onChange={handleChange}>
                        <div className='row'>
                            <label className='col' htmlFor='toothbrushBox'>teeth</label>
                            <label className='col' htmlFor='hairbrushBox'>hair</label>
                            <label className='col' htmlFor='skincareBox'>scr</label>
                            <label className='col' htmlFor='plantBox'>plant</label>
                        </div>

                        <div className='row'>
                            <input className='form-check-input form-check-inline col'
                                type='checkbox' id='toothbrushBox' value='teeth' aria-label='toothbrushBox' />
                            <input className='form-check-input form-check-inline col'
                                type='checkbox' id='hairbrushBox' value='hair' aria-label='hairbrushBox' />
                            <input className='form-check-input form-check-inline col'
                                type='checkbox' id='skincareBox' value='skincare' aria-label='skincareBox' />
                            <input className='form-check-input form-check-inline col'
                                type='checkbox' id='plantBox' value='plants' aria-label='plantBox' />
                        </div>

                        <div className='row'>
                            <label className='col' htmlFor='gymBox'>gym</label>
                            <label className='col' htmlFor='dailyCleaningBox'>clean</label>
                            <label className='col' htmlFor='medBox'>meds</label>
                            <label className='col' htmlFor='petBox'>pet</label>
                        </div>

                        <div className='row'>
                            <input className='form-check-input form-check-inline col'
                                type='checkbox' id='gymBox' value='gym' aria-label='gymBox' />
                            <input className='form-check-input form-check-inline col'
                                type='checkbox' id='dailyCleaningBox' value='dailyCleaning' aria-label='dailyCleaningBox' />
                            <input className='form-check-input form-check-inline col'
                                type='checkbox' id='medBox' value='meds' aria-label='medBox' />
                            <input className='form-check-input form-check-inline col'
                                type='checkbox' id='petBox' value='pets' aria-label='petBox' />
                        </div>
                        <div className='row'>
                            <button type='submit' className='btn btn-primary col-10 offset-1' id='habitSubmit' onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </BrowserView>

            <MobileView>
            </MobileView>
        </>
    );
}


export default HabitsPage;