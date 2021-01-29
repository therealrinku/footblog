import React from "react";
import Navbar from "../components/Navbar";
import blogs from "../data/blogs";

const PostDetailsPage = ({ match }) => {
  const blogPost =
    blogs.filter((blog) => blog.id === match.params.post_id)[0] || [];

  return (
    <div className="post--details-page">
      <Navbar />

      <section>
        <div>
          <h4>{blogPost.blogTitle}</h4>
          <p>{blogPost.blogDate}</p>
          <img src={blogPost.blogImage} alt="test" />
        </div>

        <p>{blogPost.blogDescription}</p>
      </section>
    </div>
  );
};

export default PostDetailsPage;
