import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoApp from './TodoApp.jsx'
import React from 'react'
import TodoContext from './context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoContext>
      <TodoApp />
    </TodoContext>
  </StrictMode>
)
