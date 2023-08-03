import React from 'react';
import './Styles/App.scss';
import AppRoutes from './Routes/Routes';
import { ContextProvider } from './Context/Context';
import IconCart from './Components/IconCart/IconCart';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
    <ContextProvider>
      <AppRoutes/>
    </ContextProvider>
    </>
  );
}

export default App;
