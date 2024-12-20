<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/storeContext";
import Recipe from "./components/pages/backend/recipe/Recipe";
import Homepage from "./components/pages/frontend/homepage/Homepage";
import Single from "./components/pages/frontend/single/Single";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import Category from "./components/pages/backend/category/Category";
import Level from "./components/pages/backend/level/Level";

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
            <Route path="/admin/level" element={<Level />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
=======
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './components/store/storeContext'
import Recipe from './components/pages/backend/Recipe/Recipe'
import HomePage from './components/pages/frontend/homepage/HomePage'
import Single from './components/pages/frontend/single/Single'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Category from './components/pages/backend/Category/Category'
import Level from './components/pages/backend/Level/Level'
import Dashboard from './components/pages/backend/Dashboard/Dashboard'

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/recipe/single/:slug' element={<Single/>}/>
          <Route path='/admin/food' element={<Recipe/>}/>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path='/admin/category' element={<Category/>}/>
          <Route path='/admin/level' element={<Level/>}/>
        </Routes>
      </Router>
    </StoreProvider>
    </QueryClientProvider>
  )
}

export default App
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
