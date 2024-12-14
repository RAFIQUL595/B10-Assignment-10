import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";
import AllReviews from "../AllReviews/AllReviews";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddReview from "../AddReview/AddReview";
import MyReviews from "../MyReviews/MyReviews";
import GameWatchList from "../GameWatchList/GameWatchList";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import UpdateReview from "../UpdateReview/UpdateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://chill-gamer-server-three-gilt.vercel.app/reviews/limit"),
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("https://chill-gamer-server-three-gilt.vercel.app/reviews"),
      },
      {
        path: "/reviews/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`https://chill-gamer-server-three-gilt.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/addReview",
        element: (
          <PrivetRouter>
            <AddReview></AddReview>
          </PrivetRouter>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivetRouter>
            <MyReviews></MyReviews>
          </PrivetRouter>
        ),
        loader: () => fetch("https://chill-gamer-server-three-gilt.vercel.app/myReviews"),
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivetRouter>
            <GameWatchList></GameWatchList>
          </PrivetRouter>
        ),
        loader: () => fetch("https://chill-gamer-server-three-gilt.vercel.app/watchlist"),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
