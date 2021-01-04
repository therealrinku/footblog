import React from "react";
import PostCard from "./PostCard";
import { BsFillClockFill } from "react-icons/all";

const Recent = () => {
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
    <div className="recent--page">
      <span className="recent--title">
        <BsFillClockFill />
        <p>Fresh contents!</p>
      </span>

      <section className="recent--posts">
        {posts.map((post, i) => {
          return (
            <PostCard
              blogDescription={post.blogDescription}
              blogImage={post.blogImage}
              blogTitle={post.blogTitle}
              blogPostedDate={post.blogPostedDate}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Recent;
