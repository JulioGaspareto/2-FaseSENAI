import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Pagina1 from "../pages/Pagina1";
import PaginaDois from "../pages/PaginaDois";
import Pagina3 from "../pages/Pagina3";
import Produtos from "../pages/Produtos";


const router = createBrowserRouter([
    {path: '/',element: <Home />},
    {path: '/pagina1', element: <Pagina1/>},
    {path: '/paginaDois', element: <PaginaDois/>},
    {path: '/pagina3', element: <Pagina3/>},
    {path: '/produtos', element: <Produtos/>}
])


export default router