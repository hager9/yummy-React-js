import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

export default function MealDetails() {

  let { id } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  async function getMealDetails(mealId) {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    return data.meals[0]
  }

  async function recipeProcessing() {
    setIsLoading(true);
    let mealDetailsObject = await getMealDetails(id);
    mealDetailsObject.ingredients = [];
      let mealDetailsMap = new Map(Object.entries(mealDetailsObject));
      for (let i = 0; i < mealDetailsMap.size; i++){
        if (mealDetailsMap.get(`strIngredient${i}`)) {
          mealDetailsObject.ingredients.push(`${mealDetailsMap.get(`strMeasure${i}`)} ${mealDetailsMap.get(`strIngredient${i}`)}`)
        }
    }
    setIsLoading(false);
    setMealDetails(mealDetailsObject);
  }
  useEffect(() => {
    recipeProcessing();
  },[])
  
  
  return <>
    
    

    <Helmet>
                <title>{mealDetails?.strMeal}</title>
                <meta name="description" content={mealDetails?.strMeal} />
        </Helmet>

    {isLoading? <Loading/> : <div className="row g-4 ps-5">
    <div className="col-md-4">
    <div className="meal-img overflow-hidden">
        <img className="w-100 rounded-3" src={mealDetails?.strMealThumb} alt={mealDetails?.strMeal}/>
        <h2 className='mt-2'>{mealDetails?.strMeal}</h2>
    </div>
</div>
<div className="col-md-8">
   <div className="meal-details">
    <h2>Instructions :</h2>
    <p>{mealDetails?.strInstructions}</p>
    <h3>Area : {mealDetails?.strArea}</h3>
    <h3>Category : {mealDetails?.strCategory}</h3>
    <h3>Recipe : </h3>
    <ul className="list-unstyled d-flex flex-wrap g-3">
    {mealDetails?.ingredients.map((ingredient , index) => <li key={index} className="alert alert-info p-1 m-2">{ingredient}</li>)}
    </ul>
          {mealDetails?.strTags ? <><h3>Tags : </h3>
    <ul className="list-unstyled d-flex flex-wrap g-3">
        {mealDetails?.strTags.split(",").map((tag, index) => <li key={index} className="alert alert-danger p-1 m-2">{tag}</li> )}
        
    </ul></> : ''}
    
    <a target="_blank" className="btn btn-success me-2" href={mealDetails?.strSource}>Source</a>
    <a target="_blank" className="btn btn-danger" href={mealDetails?.strYoutube}>Youtube</a>
   </div>
</div>
   </div>}
    
    
  </>
}
