import React from 'react';

const Cart = (props) => {
    // console.log(props)
    // const {strMeal} = props.fav
    // for(const meal of strMeal){
    //     meal = strMeal.strMeal
    // }

    return (
        <div>
            <h3>➡ TOTAL ORDER : {props.order.length}</h3>
            <h3>💌 LOVED DISH : {props.fav.length} </h3>
        </div>
    );
};

export default Cart;