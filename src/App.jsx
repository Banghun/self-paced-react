import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";
import { ALL_CATEGORY } from "./constants/categories";

function App() {
  // 서버에서 받아오기 전에는 빈 배열
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState(ALL_CATEGORY);
  // 선택된 음식점 (null이면 상세 모달이 닫힌 상태)
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // 서버에서 음식점 목록 가져오기
  const fetchRestaurants = async () => {
    const response = await fetch("http://localhost:3000/restaurants");
    const data = await response.json();
    setRestaurants(data);
  };

  // 화면이 처음 그려졌을 때 한 번 목록을 가져온다
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const filteredRestaurants =
    category === ALL_CATEGORY
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  // 추가하기 버튼을 눌렀을 때: 서버에 저장한 뒤 목록을 다시 가져온다
  const addRestaurant = async (newRestaurant) => {
    await fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });
    await fetchRestaurants();
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
