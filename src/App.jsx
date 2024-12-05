import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from './components/store/storeContext';
import Recipe from './components/pages/backend/recipe/Recipe';
import Homepage from './components/pages/frontend/homepage/Homepage';
import Single from './components/pages/frontend/single/Single';


const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/admin/recipe" element={<Recipe />} />
          <Route path="/admin/homepage" element={<Homepage />} />
          <Route path="/recipe/single/:slug" element={<Single />} />
        </Routes>
      </Router>
    </StoreProvider>
   
  )
}

export default App
