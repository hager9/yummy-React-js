import React from 'react'
import { Helmet } from 'react-helmet'
import Meal from '../Meal/Meal'
import axios from 'axios'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'

export default function Home() {

    function getAllMeals() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    }
    const { isLoading, data } = useQuery('allMeals', getAllMeals);

    return <>
         <Helmet>
                <title>Yummy</title>
                <meta name="description" content="yummy home page" />
        </Helmet>

        
            
        {isLoading ? <Loading /> : <div className="row g-4 ps-5">
            {data.data.meals.map((oneMeal, index) => <Meal key={index} meal={oneMeal} />)}
            </div>
             }
    
    </>
}
