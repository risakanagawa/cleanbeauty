import React from "react";

import SNS1 from "../../img/sns-1.jpg";
import SNS2 from "../../img/sns-2.jpg";
import SNS3 from "../../img/sns-3.jpg";
import SNS4 from "../../img/sns-4.jpg";
import SNS5 from "../../img/sns-5.jpg";
import SNS6 from "../../img/sns-6.jpg";
import SNS7 from "../../img/sns-7.jpg";
import SNS8 from "../../img/sns-8.jpg";

const images = [SNS1, SNS2, SNS3, SNS4, SNS5, SNS6, SNS7, SNS8];

export default function SNS() {
  return (
    <div className="sns-box">
      <h2>
        LET'S CONNECT <span>#CLEANBEAUTY</span>
      </h2>
      <div className="grid">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="sns-col"
            style={{
              background: `url(${img}) no-repeat center`,
              backgroundSize: "cover"
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
