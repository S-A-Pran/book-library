import React, { useEffect, useState } from 'react';
import Place from '../Place/Place'
import Cart from '../Cart/Cart'
import './Review.css'

const Review = () => {
    // setting state for place and cart item
    const [places, setPlaces] = useState([]);
    const [cart, setCart] = useState([])
    // fetching data
    useEffect(() => {
        fetch('./packages.JSON')
        .then(res=>res.json())
        .then(data=>setPlaces(data));
    },[])
    // function that will execute from Place component's button
    const handleClick = (item) => {
        // storing copy of existing cart
        const cartItem = [...cart,item];
        setCart(cartItem);
    }
    return (
        // both Place and Cart components called here and showing to ui
        <div className="item mt-3 row row-cols-1 row-cols-md-2 mb-5">
            <div className="col-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        places.map(place => <Place handleClick={handleClick} placeDetail={place} key={place.place}></Place>)
                    }
                </div>
            </div>
            <div className="col-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;