import React, { useContext, useState } from "react";
import Context from "../context/Context";

const ProductPage = () => {
  const user = useContext(Context);
  const [product, setProduct] = useState("Coca cola 800mg");

  return (
    <div>
      <p>
        {user} - your product is - {product}
      </p>
    </div>
  );
};

export default ProductPage;
