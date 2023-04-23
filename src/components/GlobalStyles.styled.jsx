import { injectGlobal } from '@emotion/css';
import 'modern-normalize';

export const GlobalStyles = ({ src }) => injectGlobal`
   body {
    /* background-image: url(${src});
     */
    background-color: #3f3c3c;
    background-size: cover;
    background-repeat: no-repeat;
   background-attachment: fixed ;
    /* padding: 50px 30px; */
    margin: 0;
   font-family: 'Mina', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;
