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
import ItemInfo from './components/ItemInfo';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

function App() {
  // const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    if(isLogin){
      getItems();
    }
  }, [isLogin]);

  const getItems = async () => {
  const result = await fetch(API_URL + "/items/", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await result.json();
  console.log("Estructura de los items:", data); // Verifica la estructura exacta
  setItems(data);
  }
  // const sum = () => {
  //   setCount(count + 1);
  // }
  // const resta = () => {
  //   setCount(count - 1);s
  // }
  const add = async (item) => {
    try {
      // Llamada a la API para agregar el item
      const response = await fetch(API_URL + "/items/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(item)
      });
  
      if (!response.ok) {
        throw new Error('Error al agregar el item');
      }
  
      // Obtenemos la respuesta del servidor (probablemente el item creado con su ID)
      const newItem = await response.json();
      console.log("Item agregado:", newItem);
      
      // Actualizamos el estado local con el nuevo item devuelto por el servidor
      setItems([...items, newItem]);
      
      // Si prefieres refrescar todos los items desde el servidor
      // getItems();
      
      return newItem;
    } catch (error) {
      console.error("Error al agregar item:", error);
      return null;
    }
  }
  const del = async (id) => {
    console.log(id);
    await fetch(API_URL + "/items/" + id, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    setItems(items.filter((item) => item.id_item !== id));
  }
  const login = async (user) => {
    const result = await fetch(API_URL + "/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    const data = await result.json();
    setIsLogin(data.isLogin);
    setToken(data.token);
    return data.isLogin;
  }
  const logout = () => {
    setIsLogin(false);
  }
  return (
    <div>
      <BrowserRouter>
      {isLogin && <ResponsiveAppBar logout={logout} />}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Login login={login} />} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<List items={items} ondelete={del} />} />
          <Route path="/items/:id" element={<ItemInfo />} /> 
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

