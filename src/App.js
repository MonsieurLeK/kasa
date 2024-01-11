import './assets/css/App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import PageError from './components/PageError';
import Accueil from './components/Accueil';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil/>,
    errorElement: <PageError/>
  },
  {
    path: '/about',
    element: <About/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
