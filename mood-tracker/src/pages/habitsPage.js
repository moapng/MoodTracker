import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';


function HabitsPage() {

    const [habits, setHabits] = useState();
    const handleSubmit = () => {

    }
    return (
        <>
            <BrowserView>
                <div className="container">
                    <div className="row">
                        <h2 className="col offset-1">Habits</h2>
                    </div>
                    <form>
                        <div className="row">
                            <label className="col" for="toothbrushBox">teeth</label>
                            <label className="col" for="hairbrushBox">hair</label>
                            <label className="col" for="skincareBox">scr</label>
                            <label className="col" for="plantBox">plant</label>
                        </div>

                        <div className="row">
                            <input className="form-check-input form-check-inline col"
                                type="checkbox" id="toothbrushBox" value="toothbrush" aria-label="toothbrushBox" />
                            <input className="form-check-input form-check-inline col"
                                type="checkbox" id="hairbrushBox" value="hairbrush" aria-label="hairbrushBox" />
                            <input className="form-check-input form-check-inline col"
                                type="checkbox" id="skincareBox" value="skincare routine" aria-label="skincareBox" />
                            <input className="form-check-input form-check-inline col"
                                type="checkbox" id="plantBox" value="plants" aria-label="plantBox" />
                        </div>

                        <div className="row">
                            <label className="col" for="gymBox">gym</label>
                            <label className="col" for="dailyCleaningBox">clean</label>
                            <label className="col" for="medBox">meds</label>
                            <label className="col" for="petBox">pet</label>
                        </div>

                        <div className="row">
                            <input className="form-check-input form-check-inline col"
                                type="checkbox" id="gymBox" value="gym" aria-label="gymBox" />
                            <input className="form-check-input form-check-inline col"
                                type="checkbox" id="dailyCleaningBox" value="daily cleaning" aria-label="dailyCleaningBox" />
                            <input className="form-check-input form-check-inline col"
                                type="checkbox" id="medBox" value="meds" aria-label="medBox" />
                            <input className="form-check-input form-check-inline col"
                                type="checkbox" id="petBox" value="petStuff" aria-label="petBox" />
                        </div>
                        <div className="row">
                            <button type="submit" className="btn btn-primary" id="habitSubmit" onClick={handleSubmit}>Submit</button>
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