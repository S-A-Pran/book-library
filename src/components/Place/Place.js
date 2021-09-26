import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import './Place.css'

const Place = (props) => {
    // destructuring objects to take data
    const {handleClick, placeDetail} = props;
    const calcIcon = <FontAwesomeIcon icon={faCalculator} />
    const {budget, detail, duration, img, person, place, totalFiveStarHotel} = props.placeDetail;
    return (
        <div className="col">
                {/* making card by passing those data */}
                <div className="card h-100 shadow">
                    <img height="200px" src={img} className="card-img-top rounded rounded-circle w-75 mx-auto pt-2" alt=""/>
                    <h5 className="card-title fw-bold mt-2 p-2 text-center">{place}</h5>
                    <div className="card-body">
                        <p className="card-text text-center">
                            <b>About:</b> <br/> {detail}</p>
                        <div className="row">
                            <h6 className="col-6">
                                Avilable five star hotel 
                            </h6>
                            <h6 className="col-6">
                                : {totalFiveStarHotel}
                            </h6>
                        </div>
                        <div className="row">
                            <h6 className="col">
                                Budget(Approx.)  
                            </h6>
                            <h6 className="col">
                                : {budget}
                            </h6>
                        </div>
                        <div className="row">
                            <h6 className="col ">
                                Person
                            </h6>
                            <h6 className="col">
                                : {person}
                            </h6>
                        </div>
                        <div className="row">
                            <h6 className="col">
                                Tour Duration
                            </h6>
                            <h6 className="col">
                                : {duration}
                            </h6>
                        </div>
                        <br/>
                    </div>
                    <div class="card-footer text-center">
                        <button onClick={() => handleClick(placeDetail)} className="btn btn-success general-btn">{calcIcon} Add to Calculate</button>
                    </div>
                </div>
        </div>
    );
};
<h1>I am from place</h1>
export default Place;