import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = (category) => {
    const { categoryName, categoryDetails, img } = category.category;
    console.log(categoryName, categoryDetails)
    return (
        <div className="card card-compact bg-base-200 shadow-xl w-3/4 mx-auto">
            <figure className='h-48 '>
                <img src={img} alt="laptop category" />
            </figure>
            <div className="card-body bg-base-300">
                <h2 className="card-title">{categoryName}</h2>
                <p>{categoryDetails.slice(0, 100)}...</p>
                <div className="card-actions justify-center">
                    <Link to={`/category/:id`}>
                        <button className="btn btn-outline">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;