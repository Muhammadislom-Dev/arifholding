import React, { useState } from "react";
import "./Rating.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Rating = () => {
  const data = [
    {
      title: "Hamkorlar",
      number: "20",
    },
    {
      title: "Hil uskunalar",
      number: "50",
    },
    {
      title: "Loyihalar",
      number: "10",
    },
  ];

  const [count, setCount] = useState(false);

  return (
    <div className="rating">
      <div className="container">
        <h2 className="rating-name">Бизнинг компаниямиз</h2>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className="rating-title">
            {data?.map((evt) => (
              <div className="rating-list">
                <h3 className="rating-number">
                  {count && (
                    <CountUp
                      start={0}
                      duration={2.75}
                      end={evt.number}
                      delay={0}
                    />
                  )}
                  +
                </h3>
                <p className="rating-text">{evt.title}</p>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Rating;
