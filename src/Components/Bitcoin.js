import React from 'react';
import './Bitcoin.css'

const bitcoin = (props) => {
    return (
        <div className="row">
            <div className="col info-col">
                <h1>Bitcoin</h1>
                <p id="price">${props.price}</p>
                <p>{props.time}</p>
                <p>{props.disclaimer}</p>
            </div>
        </div>
    );
}

export default bitcoin;