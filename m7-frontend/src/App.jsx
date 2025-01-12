import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useReducer, createContext, useRef, useState, useEffect } from "react";
// import { getAuthStatus } from "./api/auth";

import Home from "./pages/Home";
import New from "./pages/New";
import Tip from "./pages/Tip";
import Template from "./pages/Template";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { supplies } from "./util/get-supplies-list";

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "CREATE": {
      const existingTemplate = state.find(
        (item) => String(item.id) === String(action.data.id)
      );
      if (existingTemplate) {
        return state;
      }
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? { ...item, title: action.data.title }
          : item
      );
      break;
    }
    case "UPDATESUPPlIES": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? { ...item, supplies: action.data.supplies }
          : item
      );
      break;
    }
    case "UPDATETEMPORARY": {
      console.log("Reducer Action Data:", action.data);

      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? { ...item, temporary: action.data.temporary }
          : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default: {
      nextState = state;
    }
  }
  return nextState;
}

const custom = [
  {
    id: 4,
    title: "신나는 유럽 여행",
    supplies: supplies,
    temporary: false,
  },
  {
    id: 3,
    title: "휴식이 필요해 떠나요",
    supplies: supplies,
    temporary: false,
  },
  {
    id: 2,
    title: "먹고 죽으러 가는 여행",
    supplies: supplies,
    temporary: false,
  },
  {
    id: 1,
    title: "중학교 친구들과 여행",
    supplies: supplies,
    temporary: false,
  },
  { id: 0, title: "연인과 오사카", supplies: supplies, temporary: false },
];

export const TemplateStateContext = createContext();
export const TemplateDispatchContext = createContext();
export const pageDispatchContext = createContext();
export const pageStateContext = createContext();
export const EditStateData = createContext();
export const EditDispatchData = createContext();
export const supplyStateContext = createContext();
export const supplyDispatchContext = createContext();
export const ItemStateContext = createContext(); // 물품 추가 완료 경고창
export const ItemDispatchContext = createContext(); // 물품 추가 완료 경고창
export const IdRefContext = createContext();

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [added, setAdded] = useState(0);
  const [newSupplyList, setNewSupplyList] = useState([]);
  const [data, dispatch] = useReducer(reducer, custom);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const idRef = useRef(
    custom.length > 0 ? Math.max(...custom.map((item) => item.id)) + 1 : 1
  );
  const [isEditing, setIsEditing] = useState("");

  const onSetAdded = (value) => {
    setAdded(value);
  };

  const onEditing = (value) => {
    setIsEditing(value);
  };

  // useEffect(() => {
  //   const fetchAuthStatus = async () => {
  //     const status = await getAuthStatus();
  //     setIsAuthenticated(status.isAuthenticated);
  //   };
  //   fetchAuthStatus();
  // }, []);

  const onCreate = (title, supplies) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title,
        supplies: supplies,
        temporary: true,
      },
    });
  };

  const onUpdate = (id, title) => {
    dispatch({
      type: "UPDATE",
      data: { id, title },
    });
  };

  const onUpdateSupplies = (id, supplies) => {
    dispatch({
      type: "UPDATESUPPlIES",
      data: { id, supplies },
    });
  };

  const onUpdateTemporary = (id, temporary) => {
    dispatch({
      type: "UPDATETEMPORARY",
      data: { id, temporary },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const [page, setPage] = useState(false);

  const onSetPage = (ispage) => {
    setPage(ispage);
  };

  return (
    <>
      <pageStateContext.Provider value={page}>
        <pageDispatchContext.Provider value={{ onSetPage }}>
          <TemplateStateContext.Provider value={data}>
            <TemplateDispatchContext.Provider
              value={{
                onCreate,
                onUpdate,
                onUpdateSupplies,
                onUpdateTemporary,
                onDelete,
              }}
            >
              <EditStateData.Provider value={isEditing}>
                <EditDispatchData.Provider value={{ onEditing }}>
                  <supplyStateContext.Provider value={newSupplyList}>
                    <supplyDispatchContext.Provider
                      value={{ setNewSupplyList }}
                    >
                      <ItemStateContext.Provider value={added}>
                        <ItemDispatchContext.Provider value={{ onSetAdded }}>
                          <IdRefContext.Provider value={idRef}>
                            <Router>
                              <Routes>
                                <Route
                                  path="/login"
                                  element={<Login onLogin={handleLogin} />}
                                />
                                <Route
                                  path="/register"
                                  element={<Register />}
                                />
                                {/* Protected Routes */}
                                <Route
                                  path="/"
                                  element={
                                    <PrivateRoute
                                      isAuthenticated={isAuthenticated}
                                    >
                                      <Home />
                                    </PrivateRoute>
                                  }
                                />
                                <Route
                                  path="/new/:id"
                                  element={
                                    <PrivateRoute
                                      isAuthenticated={isAuthenticated}
                                    >
                                      <New />
                                    </PrivateRoute>
                                  }
                                />
                                <Route
                                  path="/tip"
                                  element={
                                    <PrivateRoute
                                      isAuthenticated={isAuthenticated}
                                    >
                                      <Tip />
                                    </PrivateRoute>
                                  }
                                />
                                <Route
                                  path="/template/:id"
                                  element={
                                    <PrivateRoute
                                      isAuthenticated={isAuthenticated}
                                    >
                                      <Template />
                                    </PrivateRoute>
                                  }
                                />
                              </Routes>
                            </Router>
                          </IdRefContext.Provider>
                        </ItemDispatchContext.Provider>
                      </ItemStateContext.Provider>
                    </supplyDispatchContext.Provider>
                  </supplyStateContext.Provider>
                </EditDispatchData.Provider>
              </EditStateData.Provider>
            </TemplateDispatchContext.Provider>
          </TemplateStateContext.Provider>
        </pageDispatchContext.Provider>
      </pageStateContext.Provider>
    </>
  );
}

export default App;
