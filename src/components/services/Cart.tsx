import React, { useState } from 'react';
import { useCart } from './useCart';
import './Cart.scss';

interface CartProps {
  isVisible: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isVisible, onClose }) => {
  const { cart, removeFromCart } = useCart();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const totalSum = cart.reduce((acc, item) => acc + item.price, 0);

  const handleOrder = () => {
    setIsOrderModalOpen(true);
  };

  const handleConfirmOrder = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className={`cart ${isVisible ? 'visible' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="product-div">
                <img src={item.image} alt={`Item ${index + 1}`} />
                <p>{item.item}</p>
              </div>
              <div className="order-div">
                <p>Цена: {item.price} ₽</p>
                <button onClick={() => removeFromCart(index)}>Удалить</button>
              </div>
            </div>
          ))}
          <button className="order" onClick={handleOrder}>
            Заказать
          </button>
        </div>
      )}
      {isOrderModalOpen && (
        <div className="order-modal">
          <h3>Подтверждение заказа</h3>
          <p>Общая сумма: {totalSum} ₽</p>
          <input type="text" placeholder="Введите ваш адрес" />
          <button onClick={handleConfirmOrder}>Подтвердить заказ</button>
          <button onClick={() => setIsOrderModalOpen(false)}>Отмена</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
