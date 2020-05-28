import React, { Component } from "react";
import axios from "axios";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "./utilities/paginate";
import ListGroup from "./ListGroup";
import MoviesTable from "./MoviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: {},
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
    // axios.get("/movies").then((response) => {
    //   this.setState({ movies: getMovies(), genres });
    // });
  }

  handleGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies,
    });
  };

  render() {
    const { movies, pageSize, currentPage, genres, selectedGenre } = this.state;
    const filterMovesPerGenre =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre.name === selectedGenre.name)
        : movies;
    const moviesPerPage = paginate(filterMovesPerGenre, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="d-flex">
          <ListGroup
            genres={genres}
            onGenreChange={this.handleGenre}
            selectedGenre={selectedGenre}
          />
          <div>
            <MoviesTable
              filterMovesPerGenre={filterMovesPerGenre}
              moviesPerPage={moviesPerPage}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemCount={filterMovesPerGenre.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
