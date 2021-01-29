import { RiSearchLine } from "react-icons/all";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">Soccer24x7</Link>
      </ul>

      <ul>
        <button>
          <RiSearchLine />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
