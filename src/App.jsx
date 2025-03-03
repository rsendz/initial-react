// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import List from './pages/Lista';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
//import CredentialsSignInPage from './components/Sign-in';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

function App() {
  // const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if(isLogged){
      getItems();
    }
  }, [isLogged]);
  const getItems = async () => {
  const result = await fetch("http://localhost:4000/items/");
  const data = await result.json();
  setItems(data);
}
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
  const del = async (id) => {
    await fetch("http://localhost:4000/items/" + id, {
      method: "DELETE",
    });
    setItems(items.filter((item) => item.id !== id));
  }
  const login = async (user) => {
    const result = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    const data = await result.json();
    setIsLogged(data.isLogged);
    return data.isLogged;
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

