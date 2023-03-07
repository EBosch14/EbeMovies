import { createRoot } from 'react-dom/client';
import App from './App';
import "./style.css"

const Root = createRoot(document.getElementById("app"));

Root.render(
  <App/>
)