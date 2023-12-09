import React from 'react'
import Loading from '../Loading/Loading'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Ingredients() {

  function getIngredients() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  }

  const { isLoading, data } = useQuery('ingredients', getIngredients);

  return <>
    
    <Helmet>
                <title>Ingredients</title>
                <meta name="description" content="yummy ingredients page" />
    </Helmet>

    {isLoading? <Loading/> : <div className="row g-4 ps-5">
      {data?.data.meals.map((ingredient) => <div key={ingredient.idIngredient} className="col-md-3">
        <Link to={`/specificIngredientMeals/${ingredient.strIngredient}`}>
        
        <div className="ingredient pointer text-center rounded-2" >
            <i className="fa-solid fa-utensils fa-4x"></i>
           <h3>{ingredient.strIngredient}</h3>
           {ingredient.strDescription? <p>{ingredient.strDescription.split(/[.;]/).slice(0,1)}</p> : ""}
           
    </div>
    
    
        </Link>
    </div>)}
    
  </div> }
  </>

}
