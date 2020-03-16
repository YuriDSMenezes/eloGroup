import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 10px;
  padding: 50px;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.59);
  -moz-box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.59);
  box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.59);

  form {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      color: red;
      margin-bottom: 0px;
      font-size: 12px;
    }

    input {
      border: 1px solid rgb(31, 31, 31);
      border-radius: 4px;
      height: 36px;
      margin-bottom: 10px;
      padding-left: 10px;
    }

    select {
      width: 100%;
      margin-bottom: 20px;
      height: 40px;
      border: 1px solid rgb(31, 31, 31);
      border-radius: 4px;
      padding-left: 10px;
      font-size: 16px;
    }

    button {
      background-color: #f9b233;
      border: none;
      border-radius: 4px;
      height: 40px;
      margin-top: 10px;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 16px;
      cursor: pointer;
    }

    button:disabled {
      background: #fcda9c;
      cursor:not-allowed;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      input {
        margin-left: 5px;
        margin-bottom: 0px;
        margin-right: 20px;
      }
    }
  }
`;

export const LogoField = styled.div`
  img {
    max-width: 400px;
  }
`;
