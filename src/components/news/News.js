import React from "react";
import "./news.scss";

const posts = [
  {
    date: "20210404",
    post:
      "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    date: "20210301",
    post:
      "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    date: "20210201",
    post:
      "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  { date: "20210101", post: "Our website has been released" },
];

export default function News() {
  const postBox = () => {
    return posts.map(({ post, date }, idx) => {
      return (
        <div className="news__articles--post" key={idx}>
          <div className="post--date">{date}</div>
          <div>
            <p>{post}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="news">
      <div>
        <h1>NEWS</h1>
      </div>
      <div className="news__articles">{postBox()}</div>
    </div>
  );
}
