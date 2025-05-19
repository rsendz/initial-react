import './App.css';
import { useEffect, useState } from 'react';
import List from './pages/List';
import Add from './components/Add';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import Login from './pages/Login';
import Home from './pages/Home';
import ConditionalRoute from './components/AuthedRoute';
import ItemInfo from './components/ItemInfo';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');

  const getItems = async () => {
    const response = await fetch(`${API_URL}/items`, {
      headers: { Authorization: token },
    });
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    if (isLogin) {
      getItems();
    }
  }, [isLogin]);

  const addItem = async (item) => {
    const response = await fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    setItems([...items, data.item]);
  };

  const delItem = async (id) => {
    await fetch(`${API_URL}/items/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    });
    setItems(items.filter((item) => item.id !== id));
  };

  const login = async (user) => {
    const response = await fetch(`${API_URL}/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setIsLogin(data.isLogin);
    setToken(data.token);
    return data.isLogin;
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar logout={logout} />}
        <Routes>
          <Route path='/' element={<Login login={login} />} />
          <Route
            element={<ConditionalRoute condition={isLogin} redirectTo='/' />}
          >
            <Route path='/home' element={<Home />} />
            <Route path='/add' element={<Add addItem={addItem} />} />
            <Route
              path='/items'
              element={<List items={items} ondelete={delItem} />}
            />
            <Route path='/items/:id' element={<ItemInfo items={items} />} />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

