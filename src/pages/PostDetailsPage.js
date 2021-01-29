import React from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import blogs from "../data/blogs";

const PostDetailsPage = ({ match }) => {
  const blogPost =
    blogs.filter((blog) => blog.id === match.params.post_id)[0] || [];

  return (
    <div className="post--details-page">
      <Navbar />

      <main>
        <section>
          <div>
            <h4>{blogPost.blogTitle}</h4>
            <p>{blogPost.blogDate}</p>
            <img src={blogPost.blogImage} alt="test" className="post--image" />
          </div>

          {blogPost.blogDescription.map((description, i) => {
            return (
              <p key={i} className="description">
                {blogPost.blogDescription[i]}
              </p>
            );
          })}
        </section>

        <section>
          {blogs
            .filter((post) => post.id !== match.params.post_id)
            .map((post, i) => {
              return (
                <PostCard
                  hideImage={true}
                  key={i}
                  blogDescription={post.blogShortDescription}
                  blogImage={post.blogImage}
                  blogTitle={post.blogTitle}
                  blogPostedDate={post.blogDate}
                  blogId={post.id}
                />
              );
            })}
        </section>
      </main>
    </div>
  );
};

export default PostDetailsPage;
