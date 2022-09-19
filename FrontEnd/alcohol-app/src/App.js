import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/App.css'
import IntroPage from './components/IntroPage';
import FindPassword from './components/FindPassword';
import RegisterPage from './components/RegisterPage';
function App() {
  return (
    <div class='App'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<IntroPage />} > </Route>
            <Route path="/findPassword" element={<FindPassword />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
