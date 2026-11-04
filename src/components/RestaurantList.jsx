import "./RestaurantList.css";
import { CATEGORY_ICONS } from "../constants/categories";

function RestaurantList({ restaurants, onSelectRestaurant }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            className="restaurant"
            onClick={() => onSelectRestaurant(restaurant)}
          >
            <div className="restaurant__category">
              <img
                src={CATEGORY_ICONS[restaurant.category]}
                alt={restaurant.category}
                className="category-icon"
              />
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">
                {restaurant.name}
              </h3>
              <p className="restaurant__description text-body">
                {restaurant.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RestaurantList;
