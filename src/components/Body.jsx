import React from 'react'
import Card from './card'
import { data } from "../../data"
const Body = () => {
    return (
        <div>
            <div>
                <button className="p-2 bg-blue-700 rounded-lg">filter</button>
                <p>Count of Flower</p>


            </div>

            <div className="flex gap-4 flex-wrap justify-center">
                {
                    data.map((val) => (
                        <Card value={val} />
                    ))
                }

            </div >

        </div>
    )
};

export default Body;