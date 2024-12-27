import React, { useState, useEffect } from "react";
import "./delivered.css";

const Delivered = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const sellerId = localStorage.getItem("sellerId");
      try {
        const response = await fetch(
          `http://localhost:3000/api/orderdeliveredsellerdisplay/${sellerId}`
        );
        const data = await response.json();
        if (data.success) {
          setOrders(data.orders);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <div class="delivered-container">
        <div className="delivered-tbl_content">
          <table className="delivered-tbl">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Customer Address</th>
                <th>Customer Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td data-label="Order ID">{order.orderId}</td>
                  <td data-label="Product Name">
                    {order.productId?.ProductName}
                  </td>
                  <td data-label="Quantity">{order.quantity}</td>
                  <td data-label="Price">{order.price}</td>
                  <td data-label="Customer Address">
                    {order.customerId?.CustomerAddress}
                  </td>
                  <td data-label="Customer Phone">
                    {order.customerId?.CustomerPhoneNumber}
                  </td>
                  <td className="new-order-delivered" data-label="Status">
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Delivered;
