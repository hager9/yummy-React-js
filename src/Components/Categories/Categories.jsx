import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Categories() {

  function getCategories() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  const { isLoading , data } = useQuery('categories', getCategories);
  return <>
    
    <Helmet>
                <title>Yummy Categories</title>
                <meta name="description" content="yummy categories page" />
    </Helmet>

    {isLoading? <Loading/> : <div className="row g-4 ps-5">
      {data?.data.categories.map((category) => <div key={category.idCategory} className="col-md-3">
        <Link to={`/specificCategory/${category.strCategory}`}>
        <div className="meal position-relative overflow-hidden pointer rounded-2" >
            <img src={category.strCategoryThumb} className="w-100" alt={category.strCategory}/>
            <div className="meal-layer position-absolute text-center text-black p-2">
                <h3>{category.strCategory}</h3>
                <p>{category.strCategoryDescription.split(/[.;]/).slice(0,1)}</p>
            </div>
        </div>
        </Link>
    </div>)}
    
  </div> }
   
  </>
}
