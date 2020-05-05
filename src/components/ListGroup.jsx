import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { genres, onGenreChange, selectedGenre } = this.props;
    return (
      <ul className="list-group w-25 mr-4">
        {genres.map((genre) => (
          <li
            key={genre.name}
            onClick={() => onGenreChange(genre)}
            className={
              selectedGenre.name === genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
