import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import IntensePage from './components/IntensePage';
import IntenseWriting from './components/IntenseWriting';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

<Routes>
  <Route exact path='/' element={<HomePage/>}/>
  <Route exact path='/intense' element={<IntensePage/>}/>
  <Route exact path='/intenseWriting' element={<IntenseWriting/>}/>
</Routes>

  );
}

export default App;
