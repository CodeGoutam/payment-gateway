import React from 'react'
import axios from 'axios'
const Card = ({ img, title, price, handleBuy }) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." style={{ width: '5rem' }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Rs.{price}</p>
                <button onClick={()=>handleBuy(price)} className="btn btn-primary">Buy</button>
            </div>
        </div>
    )
}

export default Card
