import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import NavBar from "./common/NavBar/NavBar";
import MenuPage from "./pages/MenuPage/MenuPage";

function App() {
  return (
    <div>
      {/*<LoginPage formType='registerasd' />*/}
      {/*<MainPage />*/}
      {/*<NavBar />*/}
      <MenuPage />
    </div>
  );
}

export default App;
