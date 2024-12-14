import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/vDR3BYK/0-6-FNgs-Rxl-CVW0-Sdqm.jpg",
      title: "Explore the Best Games",
      subtitle: "Dive into thrilling reviews and discover hidden gems.",
    },
    {
      image: "https://i.ibb.co.com/r01rhcR/capsule-616x353.jpg",
      title: "Stay Updated",
      subtitle: "Latest game reviews and ratings at your fingertips.",
    },
    {
      image:
        "https://i.ibb.co.com/D93fmqh/car-games-car-racing-game-16x9-cover.jpg",
      title: "Join the Community",
      subtitle: "Share your reviews and connect with fellow gamers.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-10 rounded-lg">
         <h1 className="text-center text-xl mb-5">
        Welcome to{" "}
        <span style={{ color: "blue" }}>
          <Typewriter
            words={["Chill Gamer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className="relative w-full ">
        <Slide autoplay={true} duration={5000} transitionDuration={1000}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="each-slide-effect relative h-[400px] md:h-[500px] lg:h-[600px]"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="mt-4 text-lg md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Banner;
