import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Categories from './Components/Categories/Categories';
import Area from './Components/Area/Area';
import Search from './Components/Search/Search';
import Contact from './Components/Contact/Contact';
import Ingredients from './Components/Ingredients/Ingredients';
import { QueryClient, QueryClientProvider } from 'react-query';
import MealDetails from './Components/MealDetails/MealDetails';
import SpecificCategory from './Components/SpecificCategory/SpecificCategory';
import AreaMeals from './Components/AreaMeals/AreaMeals';
import IngredientMeals from './Components/IngredientMeals/IngredientMeals';

function App() {

  const routes = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'categories', element: <Categories /> },
        { path: 'area', element: <Area /> },
        { path: 'search', element: <Search /> },
        { path: 'contact', element: <Contact /> },
        { path: 'ingredients', element: <Ingredients /> },
        {path: 'mealDetails/:id' , element: <MealDetails/>},
        {path: 'specificCategory/:id' , element: <SpecificCategory/>},
        {path: 'areaMeals/:id' , element: <AreaMeals/>},
        {path: 'specificIngredientMeals/:id' , element: <IngredientMeals/>},
    ]}
  ])

  let queryClient = new QueryClient();

  return <>
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={routes}>
      
      </RouterProvider>

    </QueryClientProvider>
    
  </>
}

export default App;
