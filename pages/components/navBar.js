import { BiSearch } from "react-icons/bi";
import Sidebar from "./sidebar";

const NavBar = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="navbar">
          <div className="search_bar">
            <form>
              <input type="text" placeholder="Search..." />
              <BiSearch className="logo-m" />
            </form>
          </div>
          <div className="navigation">
            <div className="profile">
              <img src="profile.png" alt="pp"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
