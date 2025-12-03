import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  CartContainer,
  CartIconWrapper,
  CartInfoContainer,
  CartInfoText,
} from "./styles";
import {
  selectCartTotalItems,
  selectCartTotalPrice,
} from "../../redux/selectors/cartSelector";

export const Cart: React.FC = () => {
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <CartContainer>
      <CartIconWrapper>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </CartIconWrapper>
      <CartInfoContainer>
        <CartInfoText>Total Items: {totalItems}</CartInfoText>
        <CartInfoText>Total Price: {totalPrice}</CartInfoText>
      </CartInfoContainer>
    </CartContainer>
  );
};
