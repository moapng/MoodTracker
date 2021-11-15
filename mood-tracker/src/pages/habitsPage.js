import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';


function HabitsPage() {
    return (
        <>
            <BrowserView>
                <div className="container">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="toothbrushBox" value="toothbrush" />
                        <label className="form-check-label" for="toothbrushBox">toothbrush</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="hairbrushBox" value="hairbrush" />
                        <label className="form-check-label" for="toothbrushBox">hairbrush</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="skincareBox" value="skincare routine" />
                        <label className="form-check-label" for="skincareBox">skincare routine</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="plantBox" value="plants" />
                        <label className="form-check-label" for="plantBox">plants</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="gymBox" value="gym" />
                        <label className="form-check-label" for="gymBox">gym</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="dailyCleaningBox" value="daily cleaning" />
                        <label className="form-check-label" for="dailyCleaningBox">daily cleaning</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="medBox" value="meds" />
                        <label className="form-check-label" for="medBox">meds</label>
                    </div>
                </div>
            </BrowserView>

            <MobileView>
            </MobileView>
        </>
    );
}


export default HabitsPage;