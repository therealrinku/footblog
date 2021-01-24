import React from "react";

const PostCard = ({
  blogTitle,
  blogDescription,
  blogPostedDate,
  blogImage,
}) => {
  return (
    <div className="post--card">
      <a href="">{blogTitle}</a>
      <p>{blogDescription}</p>
      <p>{blogPostedDate}</p>
    </div>
  );
};

export default PostCard;
