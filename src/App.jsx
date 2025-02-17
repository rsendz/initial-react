// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Boton from './components/Boton';
import List from './components/Lista';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import CredentialsSignInPage from './components/Sign-in';

function App() {
  // const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    {id : 1, name: 'item1', price : 1}, 
    {id : 2, name: 'item2', price : 2}, 
    {id : 3, name: 'item3', price : 3}
  ]);
  // const sum = () => {
  //   setCount(count + 1);
  // }
  // const resta = () => {
  //   setCount(count - 1);
  // }
  const add = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  }
  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }
  // const nombre = 'Luis Resendez';
  // const elemento = <h1>Hola, {nombre}</h1>;
  return (
    <div>
      <BrowserRouter>
      <ResponsiveAppBar />
        <Header />
        <Routes>
          <Route path="/" element={<CredentialsSignInPage />} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<List items={items} ondelete={del} />} />
        </Routes>
        <Footer />
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

