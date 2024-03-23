import React, { useState } from "react";
import "./Recommendations.css";
import { foods } from "./Food";

const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <img src={food.img} alt={food.name} className="food-img" />
      <h2 className="text-xl font-bold mt-1">{food.name}</h2>
      <div className="food-details">
        <div className="food-info-left">
          <p>Category: {food.category}</p>
          <p>Type: {food.type}</p>
          <p>Carbohydrates: {food.carbohydrates}g</p>
          <p>Proteins: {food.proteins}g</p>
        </div>
        <div className="food-info-right">
          <p>Fat: {food.fat}g</p>
          <p>Fiber: {food.fiber}g</p>
          <p>Calories: {food.calories}</p>
          <p>Sugar: {food.sugar}g</p>
          {/* <p>Vitamin A: {food.vitaminA}%</p>
          <p>Vitamin C: {food.vitaminC}%</p>
          <p>Calcium: {food.calcium}%</p>
          <p>Iron: {food.iron}%</p> */}
        </div>
      </div>
    </div>
  );
};

const Recommendations = () => {
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIsVeg, setSelectedIsVeg] = useState("");

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    filterFoods(type, selectedCategory, selectedIsVeg);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterFoods(selectedType, category, selectedIsVeg);
  };

  const handleIsVegChange = (event) => {
    const isVeg = event.target.value;
    setSelectedIsVeg(isVeg);
    filterFoods(selectedType, selectedCategory, isVeg);
  };

  const filterFoods = (type, category, isVeg) => {
    let filtered = foods;
    if (type) {
      filtered = filtered.filter((food) => food.type === type);
    }
    if (category) {
      filtered = filtered.filter((food) => food.category === category);
    }
    if (isVeg !== "") {
      const isVegBool = isVeg === "true";
      filtered = filtered.filter((food) => food.isVeg === isVegBool);
    }
    setFilteredFoods(filtered);
  };

  return (
    <div className="text-center p-5">
      <h2 className="m-2 text-2xl font-bold mb-5">Food Recommendations</h2>
      <div className="filter-dropdowns mb-6 flex flex-row justify-end items-end gap-x-4">
        <div>
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="filter-dropdown"
          >
            <option value="">Select Time</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="filter-dropdown"
          >
            <option value="">Select Category</option>
            <option value="Protein">Protein</option>
            <option value="Fat">Fat</option>
          </select>
        </div>
        <div>
          <select
            value={selectedIsVeg}
            onChange={handleIsVegChange}
            className="filter-dropdown"
          >
            <option value="">Select Meal Option</option>
            <option value="true">Vegetarian</option>
            <option value="false">Non-Vegetarian</option>
          </select>
        </div>
      </div>
      <div className="food-card-container text-center">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
