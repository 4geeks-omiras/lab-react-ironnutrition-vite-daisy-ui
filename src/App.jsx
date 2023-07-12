import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {

  // Iteración 1: Creamos una copia del array de objetos y lo asignamos como valor inicial de la variable de estado 'foods'
  const [foods, setFoods] = useState([...foodsJson]);
  console.log("🚀 ~ file: App.jsx:8 ~ App ~ foods:", foods)


  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }}
      />
    </div>
  );
}

export default App;
