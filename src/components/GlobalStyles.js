import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 100%;
    overflow:hidden;
}
.like-active {
    transform: translateX(0%);
  }
`;

export default GlobalStyled;
