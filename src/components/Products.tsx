import { useState } from "react";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const [count, setCount] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const { isLoading, error, products } = useProducts({ salesOnly: isChecked });

  const handleChange = () => setIsChecked((prev) => !prev);
  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show only Sale</label>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something wrong..{error}</h2>}
      {products.length > 1 && !isLoading && (
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
      )}

      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
