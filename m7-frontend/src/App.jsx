import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useReducer, createContext, useRef, useState } from "react";

import Home from "./pages/Home";
import New from "./pages/New";
import Tip from "./pages/Tip";
import Template from "./pages/Template";

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
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
  { id: 8, title: "신나는 유럽 여행" },
  { id: 7, title: "휴식이 필요해 떠나요" },
  { id: 6, title: "먹고 죽으러 가는 여행" },
  { id: 5, title: "중학교 친구들과 여행" },
  { id: 4, title: "연인과 오사카" },
];

export const TemplateStateContext = createContext();
export const TemplateCurId = createContext();
export const TemplateDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, custom);
  const idRef = useRef(8);

  const onCreate = (title) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title,
      },
    });
  };

  const onUpdate = (id, title) => {
    dispatch({
      type: "UPDATE",
      data: { id, title },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <TemplateStateContext.Provider value={data}>
        <TemplateCurId.Provider value={idRef}>
          <TemplateDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/tip" element={<Tip />} />
                <Route path="/template/:id" element={<Template />} />
              </Routes>
            </Router>
          </TemplateDispatchContext.Provider>
        </TemplateCurId.Provider>
      </TemplateStateContext.Provider>
    </>
  );
}

export default App;
