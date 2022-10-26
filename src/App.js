import './App.css';
import Main from './layout/Main';
import Header from './pages/Header/Header';
import Login from './pages/Login/Login';
import Rejister from './pages/Login/Rejister';


function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Rejister></Rejister>
      <Login></Login>
    </div>
  );
}

export default App;
