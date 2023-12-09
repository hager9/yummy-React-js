import React from 'react'
import { Link } from 'react-router-dom';


export default function Meal({meal}) {

    return <>
        <div key={meal.idMeal} className="col-md-3">
            <div className="meal position-relative pointer overflow-hidden rounded-2">
                <Link to={`/mealDetails/${meal.idMeal}`}>
                <img className="w-100" src={meal.strMealThumb} alt={meal.strMeal}/>
            <div className="meal-layer position-absolute p-2 text-black d-flex align-items-center">
                <h3>{meal.strMeal}</h3>
            </div>
                </Link>
        </div>
    </div>
    </>
}
