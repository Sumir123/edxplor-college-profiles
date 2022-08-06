import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Programs = () => {
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
            <div className="main_title">Programs</div>
            <div className="add_btn">
              <button onClick={openModel}>Add New</button>
            </div>
          </div>
          <div className="main_table">
            <table>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Program Name</th>
                  <th>Seats</th>
                  <th>Admission Date</th>
                  <th>Discount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>BCA</td>
                  <td>35</td>
                  <td>2022/09/25</td>
                  <td>5%</td>
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
          <h3>Add new Program</h3>
          <button onClick={closeModel}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="model_body">
          <form>
            <div className="form_item">
              <label htmlFor="progrmName">
                Program Name <span className="required">*</span> :
              </label>
              <input
                id="programName"
                type="text"
                placeholder="eg: BCA, Bsc.CSIT....."
              />
            </div>
            <div className="form_item">
              <label htmlFor="seats">
                Seats available <span className="required">*</span> :
              </label>
              <input id="seats" type="number" placeholder="" />
            </div>
            <div className="form_item">
              <label htmlFor="admsnDate">
                Admission Date <span className="required">*</span> :
              </label>
              <input id="admsnDate" type="date" />
            </div>
            <div className="form_item">
              <label htmlFor="discount">Discount :</label>
              <input id="discount" type="number" />
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

export default Programs;
