import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TrendingGamesCard = ({ game }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-down"
      className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <figure className="px-4 pt-4">
        <img
          src={game.image}
          alt={game.title}
          className="rounded-lg object-cover h-48 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{game.title}</h2>
        <p className="text-gray-600 text-sm">
          {game.description.length > 100
            ? `${game.description.slice(0, 100)}...`
            : game.description}
        </p>
      </div>
    </div>
  );
};

export default TrendingGamesCard;
