import { useEffect, useState } from "react";
import "./App.css";

import { Home } from "./Home";
import useAxiosFetcher from "./hooks/useAxiosFetcher";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetcher(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=vegetable"
  );
  useEffect(() => {
    setIngredients(data);
  }, [data]);

  return (
    <div className="App">
      <Home
        ingredients={ingredients}
        isLoading={isLoading}
        fetchError={fetchError}
      />
    </div>
  );
}

export default App;
