import { useState, useReducer } from "react";
import "./App.css";
import "./app.style.scss";
import { ACTION } from "./Action";
// import { Home } from "./Home";
// import useAxiosFetcher from "./hooks/useAxiosFetcher";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

function App() {
  const myState = {
    count: 0,
    userInput: "",
    color: false
  };
  // const [ingredients, setIngredients] = useState([]);
  // const { data, isLoading, fetchError } = useAxiosFetcher(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?s=vegetable"
  // );
  const [state, dispatch] = useReducer(reducer, myState);

  return (
    <div className="App">
      <main
        className="component"
        style={{ color: state.color ? "red" : "black" }}
      >
        <input
          type="text"
          value={state.userInput}
          required
          placeholder="Enter Input"
          onChange={(e) =>
            dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
          }
        />
        <p>{state.count}</p>
        <div className="button">
          <button
            className="btn"
            onClick={() => dispatch({ type: ACTION.DECREMENT })}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: ACTION.INCREMENT })}
          >
            +
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: ACTION.TGCOLOR })}
          >
            color
          </button>
        </div>
        <p>{state.userInput}</p>
      </main>
    </div>
  );
}

export default App;
