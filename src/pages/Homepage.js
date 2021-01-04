import Navbar from "../components/Navbar";
import Recent from "../components/Recent";
import Trending from "../components/Trending";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />

      <Trending />
      <hr />
      <Recent />
    </div>
  );
};

export default Homepage;
