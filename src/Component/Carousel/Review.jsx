import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ReviewStar = ({ review }) => {
  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= review) {
      star.push(<AiFillStar key={i + "star"} />);
    } else {
      star.push(<AiOutlineStar key={i + "star"} />);
    }
  }
  return star;
};

function Review({ review, mode }) {
  return (
    <div
      className="flex flex-col gap-10 p-10 rounded-xl"
      style={{
        boxShadow:
          mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
        background:
          mode === "dark" ? "var(--shadow-1)" : "var(--gradient-box-w)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-8">
          <p
            className="text-4xl font-semibold"
            style={{
              color:
                mode === "dark"
                  ? "var(--color-lightn)"
                  : "var(--color-heading-wv)",
            }}
          >
            {review.name}
          </p>
          <p
            className="text-xl "
            style={{
              color:
                mode === "dark"
                  ? "var(--color-body)"
                  : "var(--color-body-white)",
            }}
          >
            {review.via + " " + review.time}
          </p>
        </div>
        <div
          className="flex gap-2 p-6 text-3xl rounded-xl"
          style={{
            boxShadow:
              mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
            color: "var(--color-primary)",
          }}
        >
          <ReviewStar review={review.star} />
        </div>
      </div>
      <hr
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "10px 0",
        }}
      />
      <div>
        <p
          className="flex gap-2 text-2xl"
          style={{
            color:
              mode === "dark" ? "var(--color-body)" : "var(--color-body-white)",
          }}
        >
          {review.comment}
        </p>
      </div>
    </div>
  );
}

export default Review;
