import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const Homepage = () => {
  const posts = [
    {
      blogTitle: "Poch lands PSG job apparently",
      blogImage: "https://bit.ly/3hBnwRv",
      blogDescription: "Psg announced poch as their new manager.",
      blogPostedDate: "24 Nov 2020",
    },
    {
      blogTitle: "Solskjaer on the wheel, again?",
      blogImage: "https://bit.ly/35591jK",
      blogDescription: "Manchester United are in the best form of the season.",
      blogPostedDate: "26 Nov 2020",
    },
    {
      blogTitle: "Memphis to leave for $5M only?",
      blogImage: "https://bit.ly/3pHRt54",
      blogDescription:
        "Barcelona are closely eyeing on Memphis Deplay situation as he could leave for as low as $5M",
      blogPostedDate: "21 Nov 2020",
    },
  ];
  return (
    <div className="homepage">
      <Navbar />

      <section className="homepage--section-one">
        <p>Footblog is for all the hardcore football lovers like me.</p>
      </section>

      <Posts posts={posts} />
    </div>
  );
};

export default Homepage;
