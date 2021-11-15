import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';


function HabitsPage() {
    return (
        <>
            <BrowserView>
                <div className="container">

                    <div className="row">
                        <p className="col" >tb</p>
                        <p className="col" >hb</p>
                        <p className="col" >scr</p>
                        <p className="col" >pl</p>
                        <p className="col" >gym</p>
                        <p className="col" >dc</p>
                        <p className="col" >me</p>
                        <p className="col" >pet</p>
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
                        <input className="form-check-input form-check-inline col"
                            type="checkbox" id="gymBox" value="gym" aria-label="gymBox" />
                        <input className="form-check-input form-check-inline col"
                            type="checkbox" id="dailyCleaningBox" value="daily cleaning" aria-label="dailyCleaningBox" />
                        <input className="form-check-input form-check-inline col"
                            type="checkbox" id="medBox" value="meds" aria-label="medBox" />
                        <input className="form-check-input form-check-inline col"
                            type="checkbox" id="petBox" value="petStuff" aria-label="petBox" />
                    </div>
                </div>
            </BrowserView>

            <MobileView>
            </MobileView>
        </>
    );
}


export default HabitsPage;