import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.reducer.cartItems);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.cartID} item={item} />
      ))}
    </>
  );
};

export default CartItemsList;
