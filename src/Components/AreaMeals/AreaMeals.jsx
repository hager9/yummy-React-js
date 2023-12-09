import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import Meal from '../Meal/Meal';

export default function AreaMeals() {

    const { id } = useParams();
    
    function getAreaMeals() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)
    }

    const { data, isLoading } = useQuery('areaMeals', getAreaMeals);
    
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
