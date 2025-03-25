import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './Context/ThemeContext.jsx'
import ToDoItemProvider from './Context/ToDoItemContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeContextProvider >
        <ToDoItemProvider>
            <App />
        </ToDoItemProvider>
    </ThemeContextProvider>
)
