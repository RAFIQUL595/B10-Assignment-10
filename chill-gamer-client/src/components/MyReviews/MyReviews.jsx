import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const reviews = useLoaderData();
  const [userReviews, setUserReviews] = useState(
    reviews.filter((review) => review.userEmail === user?.email)
  );

  const handleDeleteReview = (id) => {
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
        fetch(`https://chill-gamer-server-three-gilt.vercel.app/myReviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setUserReviews((prevState) =>
                prevState.filter((review) => review._id !== id)
              );
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
            } else {
              Swal.fire(
                "Error",
                "There was an issue deleting the review.",
                "error"
              );
            }
          })
          .catch(() => {
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
        <title>My Reviews | Chill Gamer</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6">My Reviews</h1>
      {userReviews.length === 0 ? (
        <p className="text-xl font-bold">
          You have no reviews yet. Start adding your favorites!
        </p>
      ) : (
        <div className="overflow-x-auto md:w-4/6 mx-auto">
          <table className="table border border-gray-300 w-full table-zebra">
            <thead className="text-lg">
              <tr className="text-center">
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Game Title</th>
                <th>Genre</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {userReviews.map((review, index) => (
                <tr className="text-center" key={review._id}>
                  <td>{index + 1}</td>
                  <td>{review.userName}</td>
                  <td>{review.userEmail}</td>
                  <td>{review.gameTitle}</td>
                  <td>{review.genre}</td>
                  <td className="py-2 px-4 text-center">
                    <Link to={`/updateReview/${review._id}`}>
                      <button className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteReview(review._id)}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                      Delete
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

export default MyReviews;
