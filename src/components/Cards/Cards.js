import React from 'react';
import './Cards.css'

const Cards = (props) => {
    // console.log(props)
    const {strMeal, strMealThumb, strInstructions} = props.meal
    return (
        <div className='cards'>
            <div className="card">
                <img className='img' src={strMealThumb} alt="" />
                <div className="info">
                    <h4>Name : {strMeal}</h4>
                    <p> {strInstructions.slice(0, 150)}</p>
                    <div className="card-footer">
                        <div>
                            <button onClick={()=> props.handleOrder(props.meal)} className='order-btn'>Order</button>
                        </div>
                        <div className='icon-div'>
                            <i onClick={()=>props.handleFavourite(props.meal)} className="far fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;