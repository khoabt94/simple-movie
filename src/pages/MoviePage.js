import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import MovieCard, { MovieCardSkeletion } from "../components/Movie/MovieCard";
import { fetcher, API } from "../config";

const itemsPerPage = 20;

const MoviePage = () => {
  // Component State
  const [search, setSearch] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(`${API.getInitUrl()}&page=${nextPage}`);

  // Pagination
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // Fetch Data
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newUrl =
        search === ""
          ? `${API.getInitUrl()}&page=${nextPage}`
          : `${API.getSearchUrl()}${search}&page=${nextPage}`;
      setUrl(newUrl);
    }, 500);
    return () => clearTimeout(timer);
  }, [search, nextPage]);

  const movies = data?.results || [];
  // const { page, total_pages } = data;

  // Pagination
  useEffect(() => {
    if (!data || !data.total_results) return;
    // Calc PageCount again any data changes
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data]);

  const handlePageClick = (event) => {
    // Adjust itemOffset
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);

    // Fetch data for page
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white bg-slate-800 focus:outline-none"
            placeholder="Type here to search"
            onChange={(e) => handleSearchChange(e)}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {/* {loading && (
        <div className="w-10 h-10 mx-auto mb-10 border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )} */}
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {Array.from({ length: itemsPerPage }, (_, i) => (
            <MovieCardSkeletion key={i}></MovieCardSkeletion>
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} item={movie}></MovieCard>
          ))
        ) : (
          <p className="text-sm text-white opacity-50">
            Not Found Any Movies With Your Search....
          </p>
        )}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
