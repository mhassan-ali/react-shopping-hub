import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  //  Persistent Cart
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  //  Persistent Wishlist
  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  //  Toast
  const [toastMessage, setToastMessage] = useState("");

  //  Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //  Persist wishlist
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  //  Add to Cart
  function addToCart(product) {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    //  Toast
    setToastMessage(`${product.name} added to cart ✅`);
    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  }

  //  Increase quantity
  function increaseQuantity(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  //  Decrease quantity
  function decreaseQuantity(id) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  //  Remove item
  function removeItem(id) {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  //  Clear cart
  function clearCart() {
    setCartItems([]);
  }

  //  Wishlist toggle
  function toggleWishlist(product) {
    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setWishlistItems((prev) =>
        prev.filter((item) => item.id !== product.id)
      );
    } else {
      setWishlistItems((prev) => [
        ...prev,
        product,
      ]);
    }
  }

  //  Derived values
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        toggleWishlist,
        totalQuantity,
        totalPrice,
        toastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}