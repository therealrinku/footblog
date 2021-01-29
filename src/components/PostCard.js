import { useHistory } from "react-router-dom";

const PostCard = ({
  blogTitle,
  blogDescription,
  blogPostedDate,
  blogImage,
  blogId,
  hideImage
}) => {
  const history = useHistory();

  return (
    <div className="post--card">
      <section>
        <p>{blogTitle}</p>
        <p>{blogDescription}</p>
        <p>{blogPostedDate}</p>
        <button onClick={() => history.push(`/post/${blogId}`)}>
          Read More
        </button>
      </section>

      <section>
        <img style={hideImage?{display:"none"}:null} src={blogImage} alt="img" />
      </section>
    </div>
  );
};

export default PostCard;
