import React from "react";

import Routes from "./routes";
import GlobalStyles from './styles/global'

import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <>
    <Routes />
    <GlobalStyles />
    <ToastContainer autoClose={3000}/>
    </>
  )
}

export default App;
