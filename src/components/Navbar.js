import { RiSearchLine } from "react-icons/all";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <a href="/">lessismore</a>
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
