const API_URL = "http://localhost:3000/restaurants";

// 음식점 목록 가져오기 (GET)
export const getRestaurants = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("음식점 목록을 불러오지 못했습니다.");
  }
  return response.json();
};

// 새 음식점 저장하기 (POST)
export const postRestaurant = async (restaurant) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });
  if (!response.ok) {
    throw new Error("음식점을 추가하지 못했습니다.");
  }
  return response.json();
};
