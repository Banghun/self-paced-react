import { useState } from "react";
import Modal from "./Modal";
import { CATEGORIES } from "../constants/categories";

function AddRestaurantModal({ onAddRestaurant, onClose }) {
  // 입력값을 state로 관리 (controlled)
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // 추가에 실패했을 때 보여줄 안내 문구
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // 제출할 때 새로고침 막기

    try {
      await onAddRestaurant({
        id: Date.now(),
        category,
        name,
        description,
      });
      onClose();
    } catch (error) {
      console.error("Error adding restaurant:", error);
      setErrorMessage(
        "음식점을 추가하지 못했습니다. 잠시 후 다시 시도해 주세요.",
      );
    }
  };

  return (
    <Modal title="새로운 음식점" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        {/* 카테고리 */}
        <div className="form-item form-item--required">
          <label htmlFor="category" className="text-caption">
            카테고리
          </label>
          <select
            name="category"
            id="category"
            required
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">선택해 주세요</option>
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* 음식점 이름 */}
        <div className="form-item form-item--required">
          <label htmlFor="name" className="text-caption">
            이름
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          <span className="help-text text-caption">
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        {/* 실패 안내 */}
        {errorMessage && <p className="text-caption">{errorMessage}</p>}

        {/* 추가 버튼 */}
        <div className="button-container">
          <button type="submit" className="button button--primary text-caption">
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
