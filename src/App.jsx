import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from './components/store/storeContext';
import Recipe from './components/pages/backend/recipe/Recipe';
import Homepage from './components/pages/frontend/homepage/Homepage';
import Single from './components/pages/frontend/single/Single';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './components/pages/backend/dashboard/Dashboard';
import Category from './components/pages/backend/category/Category';


const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/recipe/single/:slug" element={<Single />} />
          <Route path="/admin/recipe" element={<Recipe />} />
          
        </Routes>
      </Router>
    </StoreProvider>
    </QueryClientProvider>
   
  )
}

export default App
