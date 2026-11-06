import Modal from "./Modal";

function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal title={restaurant.name} onClose={onClose}>
      <div className="restaurant-info">
        <p className="restaurant-info__description text-body">
          {restaurant.description}
        </p>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button button--primary text-caption"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </Modal>
  );
}

export default RestaurantDetailModal;
