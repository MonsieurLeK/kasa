import './assets/css/App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import PageError from './pages/PageError/PageError';
import Accueil from './pages/Accueil/Accueil';
import About from './pages/About/About';
import HotelPage from './pages/HotelPage/HotelPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil/>,
    errorElement: <PageError/>
  },
  {
    path: '/kasa',
    element: <Accueil/>,
    errorElement: <PageError/>
  },
  {
    path: '/:id',
    element: <HotelPage />,
    errorElement: <PageError/>
  },
  {
    path: '/about',
    element: <About/>,
    errorElement: <PageError/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
