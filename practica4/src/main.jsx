import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './App'
import "./index.css"
import { BudgetProvider } from './context/BudgetContext'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BudgetProvider>
            <App />
        </BudgetProvider>
    </StrictMode>
)