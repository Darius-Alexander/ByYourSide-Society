// Entry point of the React application, connects to browser
// Responsible for rendering the root component into the DOM

import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

const container = document.getElementById('root'); // Grabs DOM element with id 'root' from index.html
const root = createRoot(container); // creates a React root attached to the DOM container
root.render(<App />); // tells React to render the App component into root




