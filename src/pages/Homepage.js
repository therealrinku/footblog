import Navbar from "../components/Navbar";
import Recent from "../components/Recent";
import Trending from "../components/Trending";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />

      <section className="homepage--section-one">
        <p>Footblog is for all the hardcore football lovers like me.</p>
        <button>
          <a href="#posts">Start Exploring</a>
        </button>
      </section>

      <Trending />
      <hr />
      <Recent />
    </div>
  );
};

export default Homepage;
