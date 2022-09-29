import { useState, useContext } from "react";
import Context from "../context/Context";
import ProductPage from "./ProductPage";

const OrderPage = () => {
  const user = useContext(Context);
  const [cart, setCart] = useState(0);

  return (
    <div>
      {user} - Your Cart: {cart}
      <ProductPage />
    </div>
  );
};

export default OrderPage;
