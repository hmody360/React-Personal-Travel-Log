import React from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import cardData from "./cardData"

import "./style.css"

const App = () => {
    const cardElems = cardData.map(elem => {
        return (
            <Card
            id={elem.id} 
            {...elem}
            />
        )
    })

    return(
        <div className="app-container">
            <Navbar />
            <div className="card-list">
                {cardElems}
            </div>
        </div>
    )
}

export default App