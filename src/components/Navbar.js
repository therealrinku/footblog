import { RiSearchLine } from "react-icons/all";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul style={{ paddingLeft: "10%" }}>
        <Link to="/">Soccer24x7</Link>
      </ul>

      <ul style={{ paddingRight: "7%" }}>
        <button>
          <RiSearchLine />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
