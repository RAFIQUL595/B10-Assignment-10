import React, { useContext, useState } from "react";
import { MdStar } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FadeLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const AllReviews = () => {
  const reviewsLoader = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [sortBy, setSortBy] = useState("rating");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedGenre, setSelectedGenre] = useState("Select a genre");

  // Loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <FadeLoader color="#36d7b7" loading={true} size={80} />
      </div>
    );
  }

  // Predefined genres
  const genres = [
    "Select a genre",
    "Action",
    "RPG",
    "Adventure",
    "Strategy",
    "Simulation",
  ];

  // Filter reviews by genre
  const filteredReviews =
    selectedGenre === "Select a genre" || selectedGenre === ""
      ? reviewsLoader
      : reviewsLoader.filter((review) => review.genre === selectedGenre);

  // Sorting function
  const sortReviews = (reviews) => {
    const reviewsCopy = [...reviews];
    return reviewsCopy.sort((a, b) => {
      const compareA =
        sortBy === "rating" ? a.rating : parseInt(a.publishingYear);
      const compareB =
        sortBy === "rating" ? b.rating : parseInt(b.publishingYear);

      if (sortOrder === "asc") {
        return compareA - compareB;
      } else {
        return compareB - compareA;
      }
    });
  };

  // Sorted and filtered reviews
  const sortedReviews = sortReviews(filteredReviews);

  return (
    <div className="w-11/12 mx-auto py-8">
      <Helmet>
        <title>All Reviews | Chill Gamer</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6">All Reviews</h1>

      {/* Sorting and Genre Filter Dropdowns */}
      <div className="flex justify-center mb-4 gap-4">
        {/* Sort By Dropdown */}
        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="rating">Sort by Rating</option>
          <option value="year">Sort by Year</option>
        </select>

        {/* Sort Order Dropdown */}
        <select
          className="p-2 border rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        {/* Genre Filter Dropdown */}
        <select
          className="p-2 border rounded"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Reviews Display */}
      {sortedReviews.length === 0 ? (
        <p className="text-xl font-semibold">No reviews available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedReviews.map((review) => (
            <div className="flex flex-col" key={review._id}>
              <div className="card border space-y-3 flex-grow h-fit bg-base-100 shadow-xl hover:scale-110 transition-transform duration-300">
                <figure>
                  <img src={review.gameCover} alt={review.gameTitle} />
                </figure>
                <div className="p-5">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <span className="underline font-bold text-xl">
                        Title:
                      </span>
                      <span className="text-lg">{review.gameTitle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="underline font-bold text-xl">
                        Rating:
                      </span>
                      <p className="flex items-center gap-2">
                        <span className="text-lg">{review.rating}</span>
                        <span className="text-white bg-yellow-400 rounded-full">
                          <MdStar className="size-5" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className="underline font-bold text-xl mr-2">
                        Year:
                      </span>
                      <span className="text-lg">{review.publishingYear}</span>
                    </p>
                    <p>
                      <span className="underline font-bold text-xl mr-2">
                        Genre:
                      </span>
                      <span className="text-lg">{review.genre}</span>
                    </p>
                  </div>
                  <div className="card-actions justify-center mt-5">
                    <Link to={`/reviews/${review._id}`}>
                      <button className="btn hover:scale-110 bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                        Explore Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;
