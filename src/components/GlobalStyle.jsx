import { createGlobalStyle } from 'styled-components';
import 'modern-normalize'

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  background-color: rgb(226, 238, 241);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
  margin: 10px 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none
}
`;