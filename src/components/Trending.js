import React from "react";
import PostCard from "./PostCard";
import { BiTrendingUp } from "react-icons/all";

const Trending = () => {
  const posts = [
    {
      blogTitle: "Poch lands PSG job apparently",
      blogImage: "https://bit.ly/3hBnwRv",
      blogDescription: "Psg announced poch as their new manager.",
      blogPostedDate: "24 Nov 2020",
    },
    {
      blogTitle: "Solskjaer on the wheel, again?",
      blogImage: "https://bit.ly/35591jK",
      blogDescription: "Manchester United are in the best form of the season.",
      blogPostedDate: "26 Nov 2020",
    },
    {
      blogTitle: "Memphis to leave for $5M only?",
      blogImage: "https://bit.ly/3pHRt54",
      blogDescription:
        "Barcelona are closely eyeing on Memphis Deplay situation as he could leave for as low as $5M",
      blogPostedDate: "21 Nov 2020",
    },
    {
      blogTitle: "Amad Diallo to Man Utd Confirmed",
      blogImage: "https://bit.ly/3pHRt54",
      blogDescription:
        "Diallo become man utd first signing of the janauary window",
      blogPostedDate: "21 Nov 2020",
    },
    {
      blogTitle: "Pellistri ,the next isco!",
      blogImage: "https://bit.ly/3pHRt54",
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
    <div className="trending--page" id="posts">
      <span className="trending--title">
        <BiTrendingUp />
        <p>Trending Now!</p>
      </span>

      <section className="trending--posts">
        {posts.map((post, i) => {
          return (
            <div className="trending--post">
              <p>
                {i < 9 ? 0 : ""}
                {i + 1}
              </p>
              <div className="trending--post-info">
                <a href="/">{post.blogTitle}</a>
                <i>{post.blogPostedDate}</i>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Trending;
