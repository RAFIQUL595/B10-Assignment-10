import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const genres = [
    "Select a genre",
    "Action",
    "RPG",
    "Adventure",
    "Strategy",
    "Simulation",
  ];
  const { user } = useContext(AuthContext);

  const handelAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const gameCover = form.gameCover.value;
    const gameTitle = form.gameTitle.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const reviewDescription = form.reviewDescription.value;

    const data = {
      userName,
      userEmail,
      gameCover,
      gameTitle,
      rating,
      publishingYear,
      genre,
      reviewDescription,
    };

    fetch("https://chill-gamer-server-three-gilt.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review Added Successful",
            icon: "success",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <Helmet>
        <title>Add Review | Chill Gamer</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">Add New Review</h2>
      <form
        onSubmit={handelAddReview}
        className="bg-yellow-100 p-6 rounded-lg shadow-md border"
      >
        {/* User  Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-xl text-[#3498db]">
            User Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            defaultValue={user.displayName}
            name="userName"
            disabled
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed text-lg"
          />
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-xl text-[#3498db]">
            User Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            defaultValue={user.email}
            name="userEmail"
            disabled
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed text-lg"
          />
        </div>

        {/* Game Cover Image */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-xl text-[#3498db]">
            Game Cover Image URL <span className="text-red-600">*</span>
          </label>
          <input
            type="url"
            name="gameCover"
            className="input input-bordered w-full text-lg"
            placeholder="https://example.com/game-cover.jpg"
            required
          />
        </div>

        {/* Game Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-xl text-[#3498db]">
            Game Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="gameTitle"
            className="input input-bordered w-full text-lg"
            placeholder="Enter game title"
            required
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-xl text-[#3498db]">
            Rating (1-5) <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="rating"
            className="input input-bordered w-full text-lg"
            placeholder="Enter a rating (1-5)"
            min="1"
            max="5"
            required
          />
        </div>

        {/* Publishing Year */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-xl text-[#3498db]">
            Publishing Year <span className="text-red-600">*</span>
          </label>
          <select
            name="publishingYear"
            className="select select-bordered w-full text-lg"
            required
          >
            <option value="" disabled></option>
            {["Select a year", 2021, 2022, 2023, 2024, 2025].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Genres */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-xl text-[#3498db]">
            Genre <span className="text-red-600">*</span>
          </label>
          <select
            name="genre"
            className="select select-bordered w-full text-lg"
            required
          >
            <option value="" disabled></option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Review Description */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-xl text-[#3498db]">
            Review Description <span className="text-red-600">*</span>
          </label>
          <textarea
            name="reviewDescription"
            className="textarea textarea-bordered w-full text-lg"
            placeholder="Write your detailed review..."
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button type="submit" className="btn btn-primary w-full text-xl">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
