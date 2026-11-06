import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";
import initialRestaurants from "./data/restaurants";
import { ALL_CATEGORY } from "./constants/categories";

function App() {
  // 음식점을 추가할 수 있으므로 목록도 state로 관리
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [category, setCategory] = useState(ALL_CATEGORY);
  // 선택된 음식점 (null이면 상세 모달이 닫힌 상태)
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredRestaurants =
    category === ALL_CATEGORY
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  const addRestaurant = (newRestaurant) => {
    // 기존 배열을 바꾸지 않고 새 배열로 교체
    setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
  };

  return (
    <>
      <Header onClickAddButton={() => setIsAddModalOpen(true)} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onSelectRestaurant={setSelectedRestaurant}
        />
      </main>
      <aside>
        {selectedRestaurant && (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onClose={() => setSelectedRestaurant(null)}
          />
        )}
        {isAddModalOpen && (
          <AddRestaurantModal
            onAddRestaurant={addRestaurant}
            onClose={() => setIsAddModalOpen(false)}
          />
        )}
      </aside>
    </>
  );
}

export default App;
