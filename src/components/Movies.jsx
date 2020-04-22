import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./Like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete(movie) {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;
    const dbHasMovies = <p>Showing {movies.length} movies in database.</p>;
    const dbIsEmpty = <p>No movies in databse.</p>;
    return (
      <React.Fragment>
        {movies.length === 0 ? dbIsEmpty : dbHasMovies}

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
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
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
      </React.Fragment>
    );
  }
}

export default Movies;
