import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Overview = () => {
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
            <div className="main_title">Overview</div>
            <div className="add_btn">
              <button onClick={openModel}>Add New</button>
            </div>
          </div>
          <div className="main_table">
            <table>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Overview </th>
                  <th>Principle's Name</th>
                  <th>Principle's Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>
                    A quality education is essential for students to secure a
                    good future for themselves; it can not only enhance the
                    lives of the students, but also contribute to the overall
                    development of our country. As a result, “quality education”
                    has been declared as one of the 17 major goals of United
                    Nation's Sustainable Development Agenda 2030.
                  </td>
                  <td>Ram Shrestha</td>
                  <td>
                    <img src="principle.png" alt="" />
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
          <h3>Add new Overview</h3>
          <button onClick={closeModel}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="model_body">
          <form>
            <div className="form_item">
              <label htmlFor="	Overview">
                Overview <span className="required">*</span> :
              </label>
              <textarea />
            </div>
            <div className="form_item">
              <label htmlFor="pName">
                Principle's Name <span className="required">*</span> :
              </label>
              <input id="pName" type="text" />
            </div>
            <div className="form_item">
              <label htmlFor="pImage">
                Principle's Image <span className="required">*</span> :
              </label>
              <input id="pImage" type="file" />
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

export default Overview;
