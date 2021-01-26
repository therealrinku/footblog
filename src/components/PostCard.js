import { useHistory } from "react-router-dom";

const PostCard = ({
  blogTitle,
  blogDescription,
  blogPostedDate,
  blogImage,
}) => {
  const history = useHistory();

  return (
    <div className="post--card">
      <section>
        <a href="">{blogTitle}</a>
        <p>{blogDescription}</p>
        <p>{blogPostedDate}</p>
        <button onClick={() => history.push("/details")}>Read More</button>
      </section>

      <section>
        <img src={blogImage} alt="img" />
      </section>
    </div>
  );
};

export default PostCard;
