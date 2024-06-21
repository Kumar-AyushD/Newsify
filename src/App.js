import './App.css';
import Navbar from './Components/Navbar';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}></Route>
      </Routes>

    </>
  );
}

export default App;
