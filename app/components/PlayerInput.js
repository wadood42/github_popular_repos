import React from "react";
import PropTypes from "prop-types";
import { FaThList } from "react-icons/fa";

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.username);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <form className='player' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='player-label'>
          {this.props.label}
        </label>
        <div className=' player-inputs'>
          <input
            placeholder='username'
            className='input-light'
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
            autoComplete='off'
          />
          <button
            className='btn btn-dark'
            type='submit'
            disabled={!this.state.username}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PlayerInput;
