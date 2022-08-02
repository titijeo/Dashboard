import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext)


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser)



  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="login" element={<Login />} />
            <Route index element={
              <RequireAuth>

                <Home />
              </RequireAuth>
            }
            />
          </Route>
          <Route path="users" >
            <Route index element={
              <RequireAuth>

                <List />
              </RequireAuth>
            }
            />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>
          <Route path="products" >
            <Route index element={
              <RequireAuth>

                <List />
              </RequireAuth>
            }
            />
            <Route path=":productId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route path="new"
              element={
                <RequireAuth>

                  <New inputs={productInputs} title="Add New Product" />
                </RequireAuth>
              } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
