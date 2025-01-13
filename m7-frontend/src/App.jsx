import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bagState } from "./api/Bag/atom";
import { bagReducerSelector } from "./api/Bag/selector";

import Home from "./pages/Home";
import Tip from "./pages/Tip";
import Bag from "./pages/Bag";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NofFound";

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export const BagIdRefContext = createContext();

function App() {
  const bags = useRecoilValue(bagState);
  const bagsDispatch = useSetRecoilState(bagReducerSelector);

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const bagIdRef = useRef(
    bags.length > 0 ? Math.max(...bags.map((bag) => bag.id)) + 1 : 1
  );

  const handleBagCreate = (name, items) => {
    bagsDispatch({
      type: "CREATE",
      data: {
        id: bagIdRef.current++,
        name,
        items: items,
        temporary: true,
      },
    });
  };

  const handleBagUpdateName = (id, name) => {
    bagsDispatch({
      type: "UPDATE_NAME",
      data: { id, name },
    });
  };

  const handleBagUpdateItems = (id, items) => {
    bagsDispatch({
      type: "UPDATE_ITEMS",
      data: { id, items },
    });
  };

  const handleBagUpdateTemporary = (id, temporary) => {
    bagsDispatch({
      type: "UPDATE_TEMPORARY",
      data: { id, temporary },
    });
  };

  const handleBagDelete = (id) => {
    bagsDispatch({
      type: "DELETE",
      id,
    });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // const handleThisBagItemByCategoryCreate = (name) => {
  //   thisBagItemByCategoryDispatch({
  //     type: "CREATE",
  //     data: {
  //       id: thisBagItemByCategoryIdRef.current++,
  //       name: name,
  //       packed: false,
  //     },
  //   });
  // };

  // const handleThisBagItemByCategoryUpdatePacked = (id, packed) => {
  //   thisBagItemByCategoryDispatch({
  //     thpe: "UPDATE_PACKED",
  //     data: { id, packed },
  //   });
  // };

  // const handleThisBagItemCategoryDelete = (id) => {
  //   thisBagItemByCategoryDispatch({
  //     type: "DELETE",
  //     id,
  //   });
  // };

  return (
    <>
      <BagIdRefContext.Provider value={bagIdRef}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/tip"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Tip />
                </PrivateRoute>
              }
            />
            <Route
              path="/bag/:id"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Bag />
                </PrivateRoute>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </BagIdRefContext.Provider>
    </>
  );
}

export default App;
