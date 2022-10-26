import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Header from './pages/Header/Header';
import Login from './pages/Login/Login';
import Rejister from './pages/Login/Rejister';
import { routes } from './Routes/Routes/Routes';



function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
