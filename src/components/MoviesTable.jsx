import React from "react";
import Like from "./common/Like";
import { Link } from "react-router-dom";

const MoviesTable = (props) => {
  const { filterMovesPerGenre, moviesPerPage, onDelete } = props;

  const dbHasMovies = (
    <p>Showing {filterMovesPerGenre.length} movies in database.</p>
  );
  const dbIsEmpty = <p>No movies in databse.</p>;

  return (
    <div>
      {filterMovesPerGenre.length === 0 ? dbIsEmpty : dbHasMovies}
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {moviesPerPage.map((movie) => (
            <tr key={movie._id}>
              <td>
                <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
              </td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  // onClick={() => this.handleDelete(movie)}  -- This approach is used if the function(handleDelete) is NOT a array function!
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesTable;
