import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/Banner/Banner";
import Main from "./components/Layout/Main";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import MoviePage from "./pages/MoviePage";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const DetailPage = lazy(() => import("./pages/DetailPage"));
// const MoviePage = lazy(() => import("./pages/MoviePage"));

function App() {
  return (
    <Fragment>
      {/* <Suspense fallback={<></>}> */}
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <Fragment>
                <Banner></Banner>
                <HomePage></HomePage>
              </Fragment>
            }
          />
          <Route path="/movies" element={<MoviePage></MoviePage>} />
          <Route path="/movies/:movieId" element={<DetailPage></DetailPage>} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
      {/* </Suspense> */}
    </Fragment>
  );
}

export default App;
