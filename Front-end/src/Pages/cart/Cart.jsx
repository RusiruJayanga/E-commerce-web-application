import React, { useEffect, useState } from "react";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPayPal, setShowPayPal] = useState(false);

  useEffect(() => {
    const customerId = localStorage.getItem("customerId");
    console.log("Customer ID:", customerId);
    const customerEmail = localStorage.getItem("customerEmail");
    console.log("Customer Email:", customerEmail);
    if (!customerId) {
      setError("Empty Cart");
      setLoading(false);
      return;
    }

    const fetchCartItems = async () => {
      try {
        const apiUrl = `http://localhost:3000/api/pendingcart/pendingcartfetch/${customerId}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          console.log("Fetched cart data:", data);

          // Store item IDs in local storage
          const cartItemsWithIds = data.cartItems.map((item) => ({
            ...item,
            ItemID: item._id,
          }));

          // Save the items in local storage
          localStorage.setItem("cart", JSON.stringify(cartItemsWithIds));
          setCartItems(data.cartItems);
        } else {
          setError(data.message || "Error fetching cart items.");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch cart items.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      const apiUrl = `http://localhost:3000/api/pendingcart/pendingcartremove/${itemId}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the item from local storage, after removal
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = cartItems.filter(
          (cartItem) => cartItem.ItemID !== itemId
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        setCartItems(updatedCart);

        alert("Item removed successfully.");
      } else {
        const errorData = await response.json();
        console.error("Error removing item:", errorData.message);
        alert("Failed to remove the item. Please try again.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("An error occurred while removing the item.");
    }
  };

  // Cart clear
  const handleClearCart = async () => {
    const customerId = localStorage.getItem("customerId");

    if (!customerId) {
      alert("No customer ID found. Please log in.");
      return;
    }

    try {
      const apiUrl = `http://localhost:3000/api/pendingcart/pendingcartclear/${customerId}`;
      const response = await fetch(apiUrl, { method: "DELETE" });

      if (response.ok) {
        setCartItems([]);
        localStorage.removeItem("cart");
        alert("Cart cleared successfully.");
      } else {
        const errorData = await response.json();
        console.error("Error clearing cart:", errorData.message);
        alert("Failed to clear the cart. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred while clearing the cart.");
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === itemId) {
        return { ...item, Quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.Price * item.Quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = async () => {
    setShowPayPal(true);
    setTimeout(() => {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AZovmUB7eg8d5w4cgxO3AbgrZYDASxGOOiPcPasso9CDNARErdnzBkRN97snU5_kPSsy_Jh8tsV1iNPm&currency=USD";
      script.async = true;
      script.onload = () => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: getTotal(),
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              try {
                const details = await actions.order.capture();
                alert(
                  `Transaction completed by ${details.payer.name.given_name}`
                );

                const orderData = {
                  customerId: localStorage.getItem("customerId"),
                  items: cartItems.map((item) => ({
                    productId: item.ProductID._id,
                    quantity: item.Quantity,
                    price: item.Price,
                  })),
                  totalAmount: getTotal(),
                  paymentId: details.id,
                  paymentStatus: "Completed",
                };

                const response = await fetch(
                  "http://localhost:3000/api/orders/orderdatasend/",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(orderData),
                  }
                );

                if (response.ok) {
                  alert("Order placed successfully!");

                  // Clear the pending cart from the database
                  const customerId = localStorage.getItem("customerId");
                  const clearCartResponse = await fetch(
                    `http://localhost:3000/api/pendingcart/pendingcartclear/${customerId}`,
                    { method: "DELETE" }
                  );

                  if (clearCartResponse.ok) {
                    // Clear local state and local storage
                    setCartItems([]);
                    localStorage.removeItem("cart");
                    alert("Checkout successful! Cart cleared successfully.");
                  } else {
                    const clearCartError = await clearCartResponse.json();
                    console.error(
                      "Error clearing cart:",
                      clearCartError.message
                    );
                    alert(
                      "Checkout successful, but failed to clear the cart. Please try again."
                    );
                  }

                  // Send confirmation email (if necessary)
                  const customerEmail = localStorage.getItem("customerEmail");
                  if (customerEmail) {
                    const emailResponse = await fetch(
                      "http://localhost:3000/api/email/send-email",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          to: customerEmail,
                          subject: "Order Confirmation",
                          text: `Dear customer, your payment of $${getTotal()} has been successfully received. Thank you for shopping with us!`,
                        }),
                      }
                    );

                    if (!emailResponse.ok) {
                      console.error(
                        "Email sending failed:",
                        await emailResponse.text()
                      );
                      alert(
                        "Failed to send confirmation email. Please contact support."
                      );
                    }
                  }
                } else {
                  console.error("Error saving order:", await response.json());
                  alert("Failed to save the order. Please contact support.");
                }
              } catch (err) {
                console.error("Payment processing error:", err);
                alert("An error occurred during payment processing.");
              }
            },

            onError: (err) => {
              console.error("PayPal Checkout error:", err);
            },
          })
          .render("#paypal-button-container");
      };
      document.body.appendChild(script);
    }, 500);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <div className="cart">
        <div className="products">
          {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={`http://localhost:3000/uploads/${item.ImageFile}`}
                  alt={item.ProductName}
                />
                <div className="product-info">
                  <h3 className="product-name">{item.ProductName}</h3>
                  <p className="product-quantity">
                    Quantity:
                    <input
                      type="number"
                      value={item.Quantity}
                      min="1"
                      max="100"
                      onChange={(e) =>
                        handleQuantityChange(item._id, Number(e.target.value))
                      }
                    />
                  </p>
                  <p className="product-total">
                    Item Total: $. {(item.Price * item.Quantity).toFixed(2)}
                  </p>
                  <button
                    className="product-remove"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">
          <p>
            <span className="my">Total Price</span>
            <span className="my1">$. {getTotal()}</span>
          </p>
          <p>
            <span className="my">Number of Items</span>
            <span className="my1">
              {cartItems.reduce((total, item) => total + item.Quantity, 0)}
            </span>
          </p>
          <p>
            <span className="my">You Save</span>
            <span className="my1">$. 0.00</span>
          </p>
          <button
            className="checkout-button"
            onClick={handleCheckout}
            style={{ marginBottom: "20px" }}
          >
            Proceed to Checkout
          </button>
          {showPayPal && <div id="paypal-button-container"></div>}
        </div>
      </div>

      <button className="product-remove" onClick={handleClearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
