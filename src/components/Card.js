import React from "react";

const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`./images/${props.img}`} className="card-image" />
            <div className="card-items">
                <div className="location-items">
                    <i className="fa-solid fa-location-dot"></i>
                    <h6>{props.location}</h6>
                    <a href={props.GMlink}>
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-date">{`${props.start_date} - ${props.end_date}`}</p>
                <p className="card-desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Card