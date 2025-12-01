"use client"; // needed for client-side interactivity
import { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, []);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}
