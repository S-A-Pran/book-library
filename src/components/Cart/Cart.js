import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    // fontawesome icon taking
    const check = <FontAwesomeIcon icon={faCheck} />
    const {cart} = props;
    // calculating total items
    const total = cart.reduce((previous, current) => previous+current.person,0);
    // calculating total budget
    const totalBudget = cart.reduce((previous,current)=>previous+current.budget,0);
    return (
        <div className="border p-3 text-center shadow rounded">
            <h5>Total Selected: {total}</h5>
            <h5 className="pb-2">Total Budget  : {totalBudget} tk</h5>
            {
                cart.map(item => <h5 key={item.place} className="text-center bg-success text-white p-2 m-2 rounded-3">{check} {item.place}</h5>)
            }
        </div>
    );
};

export default Cart;