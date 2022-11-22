import React from 'react'
import Male from './Component/Male'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import RecipeInfo from './Component/RecipeInfo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Male/>}/>
      <Route path='/:MealId' element={<RecipeInfo/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App