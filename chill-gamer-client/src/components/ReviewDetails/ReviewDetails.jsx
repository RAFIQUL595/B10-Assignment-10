import { useContext } from "react";
import { Helmet } from "react-helmet";
import { MdStar } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ReviewDetails = () => {
  const loaderDetailsId = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    gameCover,
    gameTitle,
    reviewDescription,
    rating,
    genre,
    userName,
    userEmail,
  } = loaderDetailsId;

  // Add to WatchList on database
  const handelWatchList = () => {
    fetch("https://chill-gamer-server-three-gilt.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameCover,
        gameTitle,
        reviewDescription,
        rating,
        genre,
        userName: user.displayName,
        userEmail: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added to WatchList Successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Review Details | Chill Gamer</title>
      </Helmet>
      <div className="card card-compact border p-5 bg-base-100 w-96 h-fit shadow-xl mx-auto my-10">
        <figure>
          <img className="rounded-xl" src={gameCover} alt={gameTitle} />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-xl">
              <span className="font-bold">Title:</span> {gameTitle}
            </h2>
            <h2 className="flex items-center gap-2">
              <span className="text-xl font-bold">Rating: </span>
              <span className="text-xl">{rating}</span>
              <span className="text-white bg-yellow-400 rounded-full">
                <MdStar className="size-5" />
              </span>
            </h2>
          </div>
          <div>
            <h2 className="text-xl">
              <span className="font-bold">Genre: </span>
              {genre}
            </h2>
          </div>
          <div className="text-xl">
            <h3 className="font-bold underline">Review By:</h3>
            <h2>
              <span className="font-bold">Name:</span> {userName}
            </h2>
            <p>
              <span className="font-bold">Email:</span> {userEmail}
            </p>
          </div>
          <hr />
          <div>
            <h2>
              <span className="text-xl font-bold underline">Description:</span>
              <p className="text-lg">{reviewDescription}</p>
            </h2>
          </div>

          <div className="card-actions justify-center">
            <button
              onClick={handelWatchList}
              className="btn btn-primary text-lg"
            >
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
