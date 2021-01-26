import React from "react";

const PostCard = ({
  blogTitle,
  blogDescription,
  blogPostedDate,
  blogImage,
}) => {
  return (
    <div className="post--card">
      <section>
        <a href="">{blogTitle}</a>
        <p>{blogDescription}</p>
        <p>{blogPostedDate}</p>
        <button>Read More</button>
      </section>

      <section>
        <img src={blogImage} alt="img" />
      </section>
    </div>
  );
};

export default PostCard;
