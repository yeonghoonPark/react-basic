import { useState, useEffect } from "react";
import { Product } from "../models/products";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    const url = `/data/${isChecked ? "sale_" : ""}products.json`;
    fetch(url) //
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));

    // componentWillUnmount
    return () => {
      console.log("[componentWillUnmount]");
    };
  }, [isChecked]);

  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show only Sale</label>
      <ul>
        {products.map(({ id, name, price }) => (
          <li key={id}>
            <article>
              <h3>{name}</h3>
              <p>{price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
