import React from 'react';
import './App.css';
import IntensePage from './components/IntensePage';
import HomePage from './components/HomePage';
import IntenseWriting from './components/IntenseWriting';
import AfterFailing from './components/AfterFailing';
import ZenMode from './components/ZenMode';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
=======
// import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 15a021dff9427e725e9fb8ebbcfd9777abae1b88

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

<<<<<<< HEAD
export default App;

=======
export default App;
>>>>>>> 15a021dff9427e725e9fb8ebbcfd9777abae1b88
