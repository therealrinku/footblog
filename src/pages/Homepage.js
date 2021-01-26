import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const Homepage = () => {
  const posts = [
    {
      blogTitle: "Poch lands PSG job apparently",
      blogImage: "https://bit.ly/3ccRudU",
      blogDescription: "Psg new manager is Poch!",
      blogPostedDate: "24 Nov 2020",
    },
    {
      blogTitle: "Solskjaer on the wheel, again?",
      blogImage: "https://bit.ly/2Mjt1sl",
      blogDescription: "Manchester United are in the best form of the season.",
      blogPostedDate: "26 Nov 2020",
    },
    {
      blogTitle: "Memphis to leave for $5M only?",
      blogImage: "https://bit.ly/2NBAaF7",
      blogDescription:
        "Barcelona are closely eyeing on Memphis Deplay situation as he could leave for as low as $5M",
      blogPostedDate: "21 Nov 2020",
    },
    {
      blogTitle: "Amad Diallo to Man Utd Confirmed",
      blogImage:
        "https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1553287602197-R2B39P80V3IROJRE898K/ke17ZwdGBToddI8pDm48kJB_XQ3Dc5SllUdWbukQo69Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6nEhjlnWL4Jp2yRUKnAHfAtKyAEGaEsOmaOT_zZoS2TtcLgPBsTCXYa-xKfKtauE/minimalist-blogs.jpg?format=500w",
      blogDescription:
        "Diallo become man utd first signing of the janauary window",
      blogPostedDate: "21 Nov 2020",
    },
    {
      blogTitle: "Pellistri ,the next isco!",
      blogImage:
        "https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1553287602197-R2B39P80V3IROJRE898K/ke17ZwdGBToddI8pDm48kJB_XQ3Dc5SllUdWbukQo69Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6nEhjlnWL4Jp2yRUKnAHfAtKyAEGaEsOmaOT_zZoS2TtcLgPBsTCXYa-xKfKtauE/minimalist-blogs.jpg?format=500w",
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
      {posts.map((post, i) => {
        return (
          <PostCard
            key={i}
            blogDescription={post.blogDescription}
            blogImage={post.blogImage}
            blogTitle={post.blogTitle}
            blogPostedDate={post.blogPostedDate}
          />
        );
      })}
    </div>
  );
};

export default Homepage;
