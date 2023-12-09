import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Meal from '../Meal/Meal';

export default function Search() {

  const [meals, setMeals] = useState([]);

  async function searchMeal(name) {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${name}`);
    setMeals(data.meals);
  }

  return <>
  <Helmet>
                <title>Yummy Search Meal</title>
                <meta name="description" content='Search meal' />
    </Helmet>
    
    <div className="row ps-5">
    <div className="col-md-6">
    <div className="mb-lg-0 mb-4 px-4">
          <input id="searchNameInput"
            type="text"
            className="form-control bg-transparent text-white"
            placeholder="Search By Name"
            onInput={(e)=> searchMeal(`s=${e.target.value}`)}
          />
    </div>
</div>
<div className="col-md-6">
    <div className="mb-lg-0 mb-4 px-4">
          <input id="searchLetterInput"
            type="text"
            className="form-control bg-transparent text-white"
            maxLength="1"
            placeholder="Search By First Letter"
            onInput={(e)=> searchMeal(`f=${e.target.value}`)}
          />
    </div>

</div>
    </div> 

    <div className="row g-4 ps-5 my-5">
      { meals?.map((oneMeal , index)=> <Meal key={index} meal={oneMeal} /> ) }
    </div>
  </>
}
