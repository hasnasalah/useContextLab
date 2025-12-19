import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import FilterProvider from "./contextProviders/FilterProvider.jsx";
import ThemeProvider from './contextProviders/ThemeProvider.jsx';
import TodoProvider from './contextProviders/todoProvider.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
    </FilterProvider>
    </ThemeProvider>
  </StrictMode>,
)
