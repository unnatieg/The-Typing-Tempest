import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import IntensePage from './components/IntensePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

<Routes>
  <Route exact path='/' element={<HomePage/>}/>
  <Route exact path='/intense' element={<IntensePage/>}/>
</Routes>

  );
}

export default App;
