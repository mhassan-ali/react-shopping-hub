import { products } from "../data/products";

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 600); // simulate network delay
  });
}

export function fetchProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(
        (p) => p.id === Number(id)
      );

      if (product) resolve(product);
      else reject("Product not found");
    }, 600);
  });
}