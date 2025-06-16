
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx: Starting React application');

const container = document.getElementById("root");
if (!container) {
  console.error('main.tsx: Root element not found!');
} else {
  console.log('main.tsx: Root element found, mounting React app');
  createRoot(container).render(<App />);
}
