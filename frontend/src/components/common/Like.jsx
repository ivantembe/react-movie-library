import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Like extends Component {
  state = {
    isToggleOff: true,
  };

  handleClick = () => {
    this.setState({
      isToggleOff: !this.state.isToggleOff,
    });
  };

  render() {
    const { isToggleOff } = this.state;
    const colorLight = "#cccc";
    const colorDark = "#121212";
    return (
      <FontAwesomeIcon
        icon={faHeart}
        color={isToggleOff ? colorLight : colorDark}
        onClick={this.handleClick}
      />
    );
  }
}

export default Like;
