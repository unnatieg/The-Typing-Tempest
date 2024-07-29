import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import IntensePage from './components/IntensePage';
import IntenseWriting from './components/IntenseWriting';
import AfterFailing from './components/AfterFailing';
import ZenMode from './components/ZenMode';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

<Routes>
  <Route exact path='/' element={<HomePage/>}/>
  <Route exact path='/intense' element={<IntensePage/>}/>
  <Route exact path='/intenseWriting' element={<IntenseWriting/>}/>
  <Route exact path='/afterfailing' element={<AfterFailing/>}/>
  <Route exact path='/zenmode' element={<ZenMode/>}/>


</Routes>

  );
}

export default App;

