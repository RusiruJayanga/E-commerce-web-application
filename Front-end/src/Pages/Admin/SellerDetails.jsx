import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

const SellerDetail = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all seller authentication data from the backend
    axios
      .get("http://localhost:3000/api/sellerauthentication")
      .then((response) => {
        setSellers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching seller data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const deleteSeller = (id) => {
    axios
      .delete(`http://localhost:3000/api/sellerauthentication/${id}`)
      .then((response) => {
        console.log("Seller deleted successfully", response);
        setSellers(sellers.filter((seller) => seller._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting seller:", error);
      });
  };

  const updateSellerStatus = (id, status) => {
    axios
      .put(`http://localhost:3000/api/sellerauthentication/${id}`, { status })
      .then((response) => {
        setSellers(
          sellers.map((seller) =>
            seller._id === id ? { ...seller, Status: status } : seller
          )
        );
      })
      .catch((error) => console.error("Error updating seller status:", error));
  };

  return (
    <div>
      <h1 className="Admin-h1">Admin Page</h1>
      <p className="Admin-p">Welcome to the admin dashboard.</p>

      <h2 className="Admin-h2">Seller Authentication Requests</h2>

      {sellers.length > 0 ? (
        <div className="table-container">
          <table className="Admin-tab">
            <thead className="Admin-thead">
              <tr className="Admin-tr">
                <th className="Admin-th">Seller Name</th>
                <th className="Admin-th">Email</th>
                <th className="Admin-th">Address</th>
                <th className="Admin-th">Phone Number</th>
                <th className="Admin-th">Geolocation</th>
                <th className="Admin-th">Status</th>
                <th className="Admin-th">Logo Image</th>
                <th className="Admin-th">Actions</th>
              </tr>
            </thead>
            <tbody className="Admin-tbody">
              {sellers.map((seller) => (
                <tr key={seller._id}>
                  <td>{seller.SellerName}</td>
                  <td>{seller.SellerEmail}</td>
                  <td>{seller.SellerAddress}</td>
                  <td>{seller.SellerPhoneNumber}</td>
                  <td>{seller.SellerGeolocation}</td>
                  <td>{seller.Status}</td>
                  <td>
                    <img
                      className="img"
                      src={`http://localhost:3000/uploads/${seller.LogoImageFile}`}
                      alt="Seller Logo"
                      width="50"
                      height="50"
                    />
                  </td>
                  <td className="action-buttons">
                    <button
                      className="Admin-button"
                      onClick={() => updateSellerStatus(seller._id, "accepted")}
                      style={{ color: "green" }}
                    >
                      Accept
                    </button>
                    <button
                      className="Admin-button"
                      onClick={() => updateSellerStatus(seller._id, "rejected")}
                      style={{ color: "red" }}
                    >
                      Reject
                    </button>
                    <button
                      className="Admin-button"
                      onClick={() => deleteSeller(seller._id)}
                      style={{ color: "orange" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No seller authentication requests found.</p>
      )}
    </div>
  );
};

export default SellerDetail;
