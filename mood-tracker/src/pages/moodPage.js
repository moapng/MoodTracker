import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Chart } from 'react-google-charts';


function MoodPage() {
    return (
        <>
            <BrowserView>
                <div className="container">
                    <Chart
                        height={300}
                        chartType='Calendar'
                        data={[
                            [{ type: 'date', id: 'Date' }, { type: 'number', id: 'mood' }],
                            [new Date(2021, 11, 10), 1],
                            [new Date(2021, 11, 11), 0],
                            [new Date(2021, 11, 12), 1],
                            [new Date(2021, 11, 14), 3],
                            [new Date(2021, 11, 16), 1],
                            [new Date(2021, 11, 19), 2],

                        ]}
                        options={{ title: 'Mood' },
                        {
                            colorAxis:
                                [
                                    { value: 0, color: 'pink' },
                                    { value: 1, color: 'blue' },
                                    { value: 2, color: 'green' },
                                    { value: 3, color: 'red' },
                                    { value: 4, color: 'yellow' },

                                ]
                        }}>

                    </Chart>
                </div>
            </BrowserView>

            <MobileView>

            </MobileView>
        </>
    );
}


export default MoodPage;