// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './pages/Lista';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
//import CredentialsSignInPage from './components/Sign-in';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

function App() {
  // const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    {id : 1, name: 'item1', price : 1}, 
    {id : 2, name: 'item2', price : 2}, 
    {id : 3, name: 'item3', price : 3}
  ]);
  const [isLogged, setIsLogged] = useState(false);
  // const sum = () => {
  //   setCount(count + 1);
  // }
  // const resta = () => {
  //   setCount(count - 1);s
  // }
  const add = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  }
  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }
  const login = (user) => {
    if(user.username === "luisito" && user.password === "craque123"){
      setIsLogged(true);
      return true;
    }
    return false;
  }
  const logout = () => {
    setIsLogged(false);
  }
  return (
    <div>
      <BrowserRouter>
      {isLogged && <ResponsiveAppBar logout={logout} />}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Login login={login} />} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<List items={items} ondelete={del} />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* {count}
      <Boton name={"suma"} 
      click={sum} />
      <Boton name={"resta"} click={resta}/>
      <Boton name={"mensaje"} click={() => alert("hola")}/> */}
      {/* <Add add={add} />
      <List items={items} ondelete={del} /> */}
    </div>
  );
}

export default App;

