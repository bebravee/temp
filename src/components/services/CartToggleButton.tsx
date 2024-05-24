import React from 'react';

interface CartToggleButtonProps {
  onClick: () => void;
}

const CartToggleButton: React.FC<CartToggleButtonProps> = ({ onClick }) => {
  return (
    <button className="cart-toggle-btn" onClick={onClick}>
      Открыть корзину
    </button>
  );
};

export default CartToggleButton;
