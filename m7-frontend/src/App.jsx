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
  }
  return nextState;
}
const mockData = [
  { id: 0, title: "내 마음대로 시작하기" },
  {
    id: 1,
    title: "여자 혼자 여행",
  },
  {
    id: 2,
    title: "남자 혼자 여행",
  },
  {
    id: 3,
    title: "비즈니스 여행",
  },
];

const custom = [
  { id: 4, title: "연인과 오사카" },
  { id: 5, title: "중학교 친구들과 여행" },
  { id: 6, title: "먹고 죽으러 가는 여행" },
  { id: 7, title: "휴식이 필요해 떠나요" },
];

export const TemplateStateContext = createContext();
export const TemplateDispatchContext = createContext();

function App() {
  const [basic, setBasic] = useState("");
  const [data, dispatch] = useReducer(reducer, custom);
  const idRef = useRef(6);

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
      </TemplateStateContext.Provider>
    </>
  );
}

export default App;
