import React, { useState } from "react"
import ShoppingList from "./ShoppingList"
import itemData from "../data/items"
import Header from "./Header"

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function darkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        {/* <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button> */}
        <Header onDarkModeClick={darkModeClick} isDarkMode={isDarkMode} />
      </header>
      <ShoppingList items={itemData} />
    </div>
  )
}