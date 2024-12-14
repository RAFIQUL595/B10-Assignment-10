import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const watchlist = useLoaderData();
  const [userWatchlist, setUserWatchlist] = useState(
    watchlist.filter((game) => game.userEmail === user?.email)
  );

  const handleDeleteWatchList = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-three-gilt.vercel.app/watchlist/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setUserWatchlist((prevState) =>
                prevState.filter((game) => game._id !== id)
              );
              Swal.fire(
                "Deleted!",
                "Your watchlist item has been deleted.",
                "success"
              );
            } else {
              Swal.fire(
                "Error",
                "There was an issue deleting the game.",
                "error"
              );
            }
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "There was an error processing your request.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="p-6 w-11/12 mx-auto">
      <Helmet>
        <title>Game Watchlist | Chill Gamer</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6">Game Watchlist</h1>
      {userWatchlist.length === 0 ? (
        <p className="text-xl font-bold">
          You have no games in your watchlist yet. Start adding your favorites!
        </p>
      ) : (
        <div className="overflow-x-auto md:w-4/6 mx-auto">
          <table className="table border border-gray-300 w-full table-zebra">
            <thead className="text-lg">
              <tr className="text-center">
                <th>#</th>
                <th>Game Cover</th>
                <th>Game Title</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {userWatchlist.map((game, index) => (
                <tr className="text-center" key={game._id}>
                  <td>{index + 1}</td>
                  <td className="flex justify-center items-center">
                    <img
                      className="w-20"
                      src={game.gameCover}
                      alt={game.gameTitle}
                    />
                  </td>
                  <td>{game.gameTitle}</td>
                  <td>{game.genre}</td>
                  <td>{game.rating}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteWatchList(game._id)}
                      className="text-2xl btn"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GameWatchList;
