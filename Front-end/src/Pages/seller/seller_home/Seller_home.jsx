import React from "react";
import "./seller_home.css";

const Seller_home = () => {
  return (
    <div>
      <div class="container">
        <div class="tbl_content">
          <h2>Responsive Table Using HTML and CSS</h2>
          <table class="tbl">
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Status</th>
                <th colspan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="User Id">0001</td>
                <td data-label="Name">John Doe</td>
                <td data-label="Email">John@gmail.com</td>
                <td data-label="Status">Active</td>
                <td data-label="Edit">
                  <button class="btn_edit">
                    <i class="fa fa-pencil"></i>
                  </button>
                </td>
                <td data-label="Delete">
                  <button class="btn_trash">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="User Id">0002</td>
                <td data-label="Name">Simith Thoa</td>
                <td data-label="Email">Simiththoa@gmail.com</td>
                <td data-label="Status">Pending</td>
                <td data-label="Edit">
                  <button class="btn_edit">
                    <i class="fa fa-pencil"></i>
                  </button>
                </td>
                <td data-label="Delete">
                  <button class="btn_trash">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="User Id">0003</td>
                <td data-label="Name">Stephen Joy</td>
                <td data-label="Email">StephenJoy@gmail.com</td>
                <td data-label="Status">Pending</td>
                <td data-label="Edit">
                  <button class="btn_edit">
                    <i class="fa fa-pencil"></i>
                  </button>
                </td>
                <td data-label="Delete">
                  <button class="btn_trash">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="User Id">0004</td>
                <td data-label="Name">Jason Roy</td>
                <td data-label="Email">JasonRoy@gmail.com</td>
                <td data-label="Status">Active</td>
                <td data-label="Edit">
                  <button class="btn_edit">
                    <i class="fa fa-pencil"></i>
                  </button>
                </td>
                <td data-label="Delete">
                  <button class="btn_trash">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="User Id">0005</td>
                <td data-label="Name">Willimas Poe</td>
                <td data-label="Email">WillimasPoe@gmail.com</td>
                <td data-label="Status">Active</td>
                <td data-label="Edit">
                  <button class="btn_edit">
                    <i class="fa fa-pencil"></i>
                  </button>
                </td>
                <td data-label="Delete">
                  <button class="btn_trash">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="User Id">0006</td>
                <td data-label="Name">Kevin Thomas</td>
                <td data-label="Email">KevinThomas@gmail.com</td>
                <td data-label="Status">Active</td>
                <td data-label="Edit">
                  <button class="btn_edit">
                    <i class="fa fa-pencil"></i>
                  </button>
                </td>
                <td data-label="Delete">
                  <button class="btn_trash">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Seller_home;
