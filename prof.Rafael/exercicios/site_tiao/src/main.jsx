
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { GlobalContextProvider } from './context/GlobalContext'


createRoot(document.getElementById('root')).render(
<GlobalContextProvider>
  <RouterProvider router={router}>
  </RouterProvider>
</GlobalContextProvider>
    
)