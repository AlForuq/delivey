import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import { toggle } from "../../../store/shoppingCart/cartUiSlice";
import { CartItem } from "./CartItem";
import { CartContainer } from "./style";

export const Carts = () => {

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const toggleOpen = () => {
    dispatch(toggle());
  };

  return (
    <CartContainer className="">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleOpen}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>

          <Link onClick={toggleOpen} to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      </ListGroup>
    </CartContainer>
  );
};
