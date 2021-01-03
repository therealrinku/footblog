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
        <h4>{blogTitle}</h4>
        <p>{blogDescription}</p>
        <p>{blogPostedDate}</p>
      </section>

      <section>
        <img src={blogImage} alt="post+image" />
      </section>
    </div>
  );
};

export default PostCard;
