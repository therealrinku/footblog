import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import blogs from "../data/blogs";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      {blogs.map((post, i) => {
        return (
          <PostCard
            key={i}
            blogDescription={post.blogShortDescription}
            blogImage={post.blogImage}
            blogTitle={post.blogTitle}
            blogPostedDate={post.blogDate}
            blogId={post.id}
          />
        );
      })}
    </div>
  );
};

export default Homepage;
