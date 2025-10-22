import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './idole/Home'
import ErrorPage from "./idole/ErrorPage.jsx";
import Cristaline from "./idole/Cristaline.jsx";
import Hitlaire from "./idole/Hitlaire.jsx";
import KimK from "./idole/KimK.jsx";
import Maoam from "./idole/Maoam.jsx";
import Muslini from "./idole/Muslini.jsx";
import PommePot from "./idole/PommePot.jsx";
import ADCMarchi from "./idole/ADCMarchi.jsx";




const router = createBrowserRouter([
    {
        element:<App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/staline", element: <Cristaline/>},
            {path: "/hitler", element: <Hitlaire/>},
            {path: "/mao-zedong", element: <Maoam/>},
            {path: "/pol-pot", element: <PommePot/>},
            {path: "/marchi", element: <ADCMarchi/>},
            {path: "/kim-jong-un", element: <KimK/>},
            {path: "/mussolini", element: <Muslini/>}
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)



