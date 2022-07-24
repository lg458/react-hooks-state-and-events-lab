import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkIsOn, setDarkMode] = useState(false);
  
  const appClass = darkIsOn ? "App dark" : "App light"

  function handleToggleDarkMode() { 
    setDarkMode((darkisOn) => (!darkIsOn));
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleDarkMode}>{darkIsOn ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList 
      items={itemData}
      />
    </div>
  );
}

export default App;
