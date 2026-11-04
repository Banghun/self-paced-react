import "./Modal.css";
import { CATEGORIES } from "../constants/categories";

function AddRestaurantModal() {
  // 04단계에서 헤더 버튼으로 열 예정이라 지금은 modal--open 없이 닫아둠
  return (
    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">새로운 음식점</h2>
        <form>
          {/* 카테고리 */}
          <div className="form-item form-item--required">
            <label htmlFor="category" className="text-caption">
              카테고리
            </label>
            <select name="category" id="category" required>
              <option value="">선택해 주세요</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* 음식점 이름 */}
          <div className="form-item form-item--required">
            <label htmlFor="name" className="text-caption">
              이름
            </label>
            <input type="text" name="name" id="name" required />
          </div>

          {/* 설명 */}
          <div className="form-item">
            <label htmlFor="description" className="text-caption">
              설명
            </label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={5}
            ></textarea>
            <span className="help-text text-caption">
              메뉴 등 추가 정보를 입력해 주세요.
            </span>
          </div>

          {/* 추가 버튼 */}
          <div className="button-container">
            <button className="button button--primary text-caption">
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRestaurantModal;
