import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../../Assets/logo.jpg'

const AdvertiseProductCard = () => {
    return (
        <div className="card w-3/4 glass mx-auto">
            <figure className='h-24 md:h-32 lg:h-32 '>
                <img src={img} alt="laptop category" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Title</h2>
                <p>Rating: ★</p>
                <div className="card-actions justify-center">
                    <Link to={`/services/`}>
                        <button className="btn btn-outline">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProductCard;