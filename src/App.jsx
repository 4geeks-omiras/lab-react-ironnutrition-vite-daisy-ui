import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";

function App() {

  // Iteración 1: Creamos una copia del array de objetos y lo asignamos como valor inicial de la variable de estado 'foods'
  const [foods, setFoods] = useState([...foodsJson]);
  console.log("🚀 ~ file: App.jsx:8 ~ App ~ foods:", foods)


  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
