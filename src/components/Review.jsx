import React from 'react'
import { FaStar } from "react-icons/fa6";

const Review = () => {
    return (
        <div className='reviews container'>
            <div className="card">

               
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />

                <p className="text">
                    Amazing Service, got my order delivered the same day i requested. I could even give more than five stars if it were possible.
                </p>
                <p className="name">
                    Lawrence A.<br/>
                    Victoria Island
                </p>

            </div>
            <div className="card">

               
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />

                <p className="text">
                    Amazing Service, got my order delivered the same day i requested. I could even give more than five stars if it were possible.
                </p>
                <p className="name">
                    Lawrence A.<br/>
                    Victoria Island
                </p>

            </div>
            <div className="card">

                
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />

                <p className="text">
                    Amazing Service, got my order delivered the same day i requested. I could even give more than five stars if it were possible.
                </p>
                <p className="name">
                    Lawrence A.<br/>
                    Victoria Island
                </p>

            </div>
        </div>
    )
}

export default Review
