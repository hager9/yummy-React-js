import axios from 'axios';
import React from 'react'
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Area() {

  function getAreas() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  }

  const { isLoading, data } = useQuery('Areas', getAreas);

  return <>
    <Helmet>
                <title>World Areas</title>
                <meta name="description" content="yummy areas page" />
    </Helmet>

    {isLoading? <Loading/> : <div className="row g-4 ps-5">
      {data?.data.meals.map((area , index) => <div key={index} className="col-md-3">
        <Link to={`/areaMeals/${area.strArea}`}>
        
        <div class="area pointer text-center rounded-2" >
        <i class="fa-solid fa-house-laptop fa-4x"></i>
           <h3>{area.strArea}</h3>
    </div>
    
        </Link>
    </div>)}
    
  </div> }
  </>
}
