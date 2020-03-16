import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}

textarea:focus,
input:focus,
select:focus {
  border-color: none !important;
  outline: 0;
}

html,body,#root {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  background-color: rgb(10, 10, 10);
  font-weight: 400 lighter;
  -webkit-font-smoothing: antialiased;
}

`;
