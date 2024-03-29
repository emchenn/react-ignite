import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
           * {
                      margin: 0;
                      padding: 0;
                      box-sizing: border-box;
           }
           html {
                      &::-webkit-scrollbar {
                      width: 0.5rem;
                      }
                      &::-webkit-scrollbar-thumb {
                                 background-color: darkgreen;
                      }
                      &::-webkit-scrollbar-track {
                      background-color: white;
                      }
           }
           body {
                      font-family: 'Montserrat', Arial, sans-serif;
                      width: 100%;
                      padding: 1rem 0;
           }
           h2 {
                      font-size: 2rem;
                      font-weight: 700;
           }
           h3 {
                      font-size: 1.3rem;
                      color: #333;
                      margin-bottom: .5rem;
           }
           p {
                      font-size: 1.2rem;
                      color: #696969;
           }
           a {
                      text-decoration: none;
                      color: #333;
           }
           img {
                      display: block;
           }
           input {
                      font-weight: bold;
                      font-family: 'Montserrat', Arial, sans-serif;
           }
`;

export default GlobalStyles;
