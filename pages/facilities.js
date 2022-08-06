import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Facilities = () => {
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
            <div className="main_title">Facilities </div>
            <div className="add_btn">
              <button onClick={openModel}>Add New</button>
            </div>
          </div>
          <div className="main_table">
            <table>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Facilities title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Library Facilities</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                  </td>

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
          <h3>Add new Facilities</h3>
          <button onClick={closeModel}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="model_body">
          <form>
            <div className="form_item">
              <label htmlFor="FacilitiesTitle">
                Facilities Title <span className="required">*</span> :
              </label>
              <input id="FacilitiesTitle" type="text" />
            </div>
            <div className="form_item">
              <label htmlFor="description">Description :</label>
              <textarea />
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

export default Facilities;
