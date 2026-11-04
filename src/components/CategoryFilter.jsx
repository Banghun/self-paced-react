import "./CategoryFilter.css";
import { ALL_CATEGORY, CATEGORIES } from "../constants/categories";

function CategoryFilter({ category, onChangeCategory }) {
  return (
    <section className="restaurant-filter-container">
      <select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(event) => onChangeCategory(event.target.value)}
      >
        {[ALL_CATEGORY, ...CATEGORIES].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </section>
  );
}

export default CategoryFilter;
