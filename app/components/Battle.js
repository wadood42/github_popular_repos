import React from "react";

import Instructions from "./Instructions";
import PlayerInput from "./PlayerInput";
class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player,
    });
  }

  render() {
    const { playerOne, playerTwo } = this.state;

    return (
      <React.Fragment>
        <Instructions />
        <div className='players'>
          <h1 className='lg-header'>Players</h1>
          <div className='row'>
            {playerOne === null && (
              <PlayerInput
                label='Player One'
                onSubmit={(value) => this.handleSubmit("playerOne", value)}
              />
            )}
            {playerTwo === null && (
              <PlayerInput
                label='Player Two'
                onSubmit={(value) => this.handleSubmit("playerTwo", value)}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Battle;
