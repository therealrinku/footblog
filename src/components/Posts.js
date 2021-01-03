import PostCard from "./PostCard";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <PostCard
            blogTitle={post.blogTitle}
            blogImage={post.blogImage}
            blogDescription={post.blogDescription}
            blogPostedDate={post.blogPostedDate}
            blogDescription={post.blogDescription}
          />
        );
      })}
    </div>
  );
};

export default Posts;
