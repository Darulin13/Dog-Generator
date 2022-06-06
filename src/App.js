import React from "react";
import Generator from "./components/Generator"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
  }
`;
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Generator />
    </>
  )
}