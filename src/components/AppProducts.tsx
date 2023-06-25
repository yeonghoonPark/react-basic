import React from "react";
import Products from "./Products";
import { useState } from "react";

export default function AppProducts() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShow((prev) => !prev)}>Toggle</button>
      {isShow && <Products />}
    </div>
  );
}
