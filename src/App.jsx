import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {

  // Iteración 1: Creamos una copia del array de objetos y lo asignamos como valor inicial de la variable de estado 'foods'
  const [foods, setFoods] = useState([...foodsJson]);
  console.log("🚀 ~ file: App.jsx:8 ~ App ~ foods:", foods)

  const handleDelete = (id) => {
    console.log("🚀 ~ file: App.jsx:13 ~ handleDelete ~ id:", id)
    const newFoods = foods.filter(f => f.id !== id);
    setFoods(newFoods);
  }


  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div className="grid grid-cols-2 gap-4">

        {foods.map(f => (
          <FoodBox key={f.id} food={f} onDeleteItem={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
