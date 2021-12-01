import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    height: 100%;
    }
body{
    width: 100%;
    overflow:hidden;
    height: 100%;
    background:#f5b309;
    padding-top: constant(safe-area-inset-top); 
    padding-top: env(safe-area-inset-top);
    padding-bottom: constant(safe-area-inset-bottom); 
    padding-bottom: env(safe-area-inset-bottom); 
    font-family: 'M PLUS 1 Code', sans-serif;
    
    /* iOS 11.0-iOS 11.1 */
     /*iOS 11.2 */
    /* iOS 11.0-iOS 11.1 */
    /*iOS 11.2 */
}

`;

export default GlobalStyled;
