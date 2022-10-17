/* Used createRoot as React.DOM.render is no longer supported in React 18 */

/* https://bobbyhadz.com/blog/react-reacdom-render-no-longer-supported-in-react-18#:~:text=The%20render()%20method%20of,and%20creates%20a%20React%20root. */


import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import * as ReactDOMClient from 'react-dom/client';

import Header from './components/header'
import App from './App';
import './index.css';

const rootElement = document.getElementById("root")

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
