import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";
import TrendingGames from "../components/TrendingGames/TrendingGames";
import HighestRatedGames from "../components/HighestRatedGames/HighestRatedGames";
import { useLoaderData } from "react-router-dom";
import GameReleases from "../components/GameReleases/GameReleases";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { FadeLoader } from "react-spinners";

const Home = () => {
  const highestRated = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <FadeLoader color="#36d7b7" loading={true} size={80} />
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>Home | Chill Gamer</title>
      </Helmet>
      <Banner></Banner>
      <HighestRatedGames highestRated={highestRated}></HighestRatedGames>
      <TrendingGames></TrendingGames>
      <GameReleases></GameReleases>
    </div>
  );
};

export default Home;
