import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import Meal from '../Meal/Meal';

export default function IngredientMeals() {

    const { id } = useParams();
    
    function getIngredientMeals() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
    }

    const { data, isLoading } = useQuery('ingredientMeals', getIngredientMeals);
    
    return <>
     <Helmet>
                <title>{id} Meals</title>
                <meta name="description" content={id} />
        </Helmet>

        {isLoading ? <Loading /> : <div className="row g-4 ps-5">
            {data?.data.meals.map((meal , index)=> <Meal key={index} meal={meal} />)}
            </div>
        }
    </>
}
