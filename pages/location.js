import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Location = () => {
  const openModel = () => {
    var model = document.querySelector(".model");
    var overlay = document.querySelector(".overlay");
    overlay.classList.add("active");
    model.classList.add("active");
  };
  const closeModel = () => {
    var model = document.querySelector(".model");
    var overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");
    model.classList.remove("active");
  };
  return (
    <>
      <div className="main">
        <div className="main_body">
          <div className="main_heading">
            <div className="main_title">Locations</div>
            <div className="add_btn">
              <button onClick={openModel}>Add New</button>
            </div>
          </div>
          <div className="main_table">
            <table>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Municipality </th>
                  <th>City Name</th>
                  <th>Street Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Kathmandu</td>
                  <td>Kathmandu</td>
                  <td>Swayambhu</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
      <div className="model">
        <div className="model_heading">
          <h3>Add new Location</h3>
          <button onClick={closeModel}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="model_body">
          <form>
            <div className="form_item">
              <label htmlFor="municipalityName">
                Municipality Name<span className="required">*</span> :
              </label>
              <input id="municipalityName" type="text" />
            </div>
            <div className="form_item">
              <label htmlFor="city">
                City Name <span className="required">*</span> :
              </label>
              <input id="city" type="number" placeholder="" />
            </div>
            <div className="form_item">
              <label htmlFor="street">
                Street Name <span className="required">*</span> :
              </label>
              <input id="street" type="text" />
            </div>
          </form>
        </div>
        <div className="model_footer">
          <button className="secondary" onClick={closeModel}>
            Cancel
          </button>
          <button className="primary">Add</button>
        </div>
      </div>
    </>
  );
};

export default Location;
