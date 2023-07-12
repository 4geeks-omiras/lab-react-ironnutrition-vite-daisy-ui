// Your code here
export default function FoodBox({ food, onDeleteItem }) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={food.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{food.name}</h2>
                <p><strong>Calories: </strong>{food.calories}</p>
                <p><strong>Servings: </strong>{food.servings}</p>

                <div className="card-actions">
                    <button onClick={()=> onDeleteItem(food.id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
}