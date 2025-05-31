import "./App.css";
import Lista from "./pages/List";
import Add from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ConditionalRoute from "./components/AuthedRoute";
import ItemInfo from "./components/ItemInfo";
import useAuth from "./hooks/useAuth";
import useItems from "./hooks/useItems";

const App = () => {
  const { isLogin, token, login, logout } = useAuth();
  const { items, addItem, delItem } = useItems(token);

  return (
    <div>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar logout={logout} />}
        <Routes>
          <Route path="/" element={<Login login={login} />} />
          <Route
            element={<ConditionalRoute condition={isLogin} redirectTo="/" />}
          >
            <Route path="/home" element={<HomePage />} />
            <Route path="/add" element={<Add add={addItem} />} />
            <Route
              path="/items"
              element={<Lista items={items} ondelete={delItem} />}
            />
            <Route path="/items/:id" element={<ItemInfo items={items} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
