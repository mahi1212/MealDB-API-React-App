import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import './Box.css'
const Box = () => {
    const [meals, setmeals] = useState ([])
    const [order, setOrder] = useState([])
    const [fav, setFav] = useState([])
    const [displayMeals, setDisplayMeals] = useState('')

    const handleFavourite = item => {
        const newFav = [...fav, item]
        setFav(newFav)
    }
    const handleOrder = meal =>{
        const newOrder = [...order, meal]
        setOrder(newOrder)
    }

    const handleSearch = (event) => {
        const searchText = event.target.value
        console.log(searchText)
        setDisplayMeals(searchText)
    }
    useEffect(()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${displayMeals}`)
        .then(res => res.json())
        .then(data=> setmeals(data.meals))
    }, [displayMeals])


    return (
        <div>
            <div>
                <div className="search-area">
                    <input type="text" onChange={handleSearch}
                    className='search-box' placeholder='Search your favourite food' />
                </div>
            </div>
            <div className='box'>
                <div className='shop'>
                    {
                        meals.map(meal=> <Cards key={meal.idMeal}
                            meal={meal}
                            handleOrder={handleOrder}
                            handleFavourite={handleFavourite}> </Cards>)
                    }
                </div>
                <div className="cart">
                    <Cart order ={order}
                    fav={fav}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Box;