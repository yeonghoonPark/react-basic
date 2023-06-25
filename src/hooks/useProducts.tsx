import { useState, useEffect } from "react";
import { Product } from "../models/products";

type Props = {
  salesOnly: boolean;
};

export default function useProducts({ salesOnly }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const url = `/data/${salesOnly ? "sale_" : ""}products.json`;
    setIsLoading(true);
    setError(undefined);
    fetch(url) //
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));

    // componentWillUnmount
    return () => {
      console.log("[componentWillUnmount]");
    };
  }, [salesOnly]);

  return {
    isLoading,
    error,
    products,
  };
}
