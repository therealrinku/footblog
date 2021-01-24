import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

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
    {
      blogTitle: "Amad Diallo to Man Utd Confirmed",
      blogImage: "https://bit.ly/3pHRt54",
      blogDescription:
        "Diallo become man utd first signing of the janauary window",
      blogPostedDate: "21 Nov 2020",
    },
    {
      blogTitle: "Pellistri ,the next isco!",
      blogImage: "https://bit.ly/3pHRt54",
      blogDescription:
        "Diallo become man utd first signing of the janauary window",
      blogPostedDate: "21 Nov 2020",
    },
    {
      blogTitle: "Messsi to Man city in the summer?",
      blogImage: "https://bit.ly/3pHRt54",
      blogDescription:
        "Diallo become man utd first signing of the janauary window",
      blogPostedDate: "21 Nov 2020",
    },
  ];
  return (
    <div className="homepage">
      <Navbar />
      {posts.map}
      <section className="posts">
        <section className="featured">
          <PostCard
            blogDescription="Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
             ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
             cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."
            blogImage={posts[0].blogImage}
            blogTitle={posts[0].blogTitle}
            blogPostedDate={posts[0].blogPostedDate}
          />
        </section>

        <section className="featured--side">
          <PostCard
            blogDescription={posts[1].blogDescription}
            blogImage={posts[1].blogImage}
            blogTitle={posts[1].blogTitle}
            blogPostedDate={posts[1].blogPostedDate}
          />
          <PostCard
            blogDescription={posts[2].blogDescription}
            blogImage={posts[2].blogImage}
            blogTitle={posts[2].blogTitle}
            blogPostedDate={posts[2].blogPostedDate}
          />
        </section>
      </section>
    </div>
  );
};

export default Homepage;
