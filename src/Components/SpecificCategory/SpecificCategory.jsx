import axios from 'axios';
import React from 'react'
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import Meal from '../Meal/Meal';

export default function SpecificCategory() {
    const { id } = useParams();

    function getSpecificCategoryMeals() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    }

    const {data , isLoading } = useQuery('specificCategoryMeals', getSpecificCategoryMeals);
    

    return <>
    <Helmet>
                <title>{id} category</title>
                <meta name="description" content={id} />
        </Helmet>

        {isLoading ? <Loading /> : <div className="row g-4 ps-5">
            {data?.data.meals.map((meal , index)=> <Meal key={index} meal={meal} />)}
            </div>
        }
       
    </>
}
