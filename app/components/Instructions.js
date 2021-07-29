import React from "react";
import {
  faUserFriends,
  FaFighterJet,
  FaTrophy,
  FaUserFriends,
} from "react-icons/fa";
import "../styles/Battle.css";

class Instructions extends React.Component {
  render() {
    return (
      <div className='instructions-container'>
        <h1 className='center-text header-lg'>Instructions</h1>
        <ol>
          <li>
            <h3 className='header-sm'>Enter Two Github users</h3>
            <FaUserFriends className='bg-light' color='#dbb042' size={140} />
          </li>
          <li>
            <h3 className='header-sm'>Battle</h3>
            <FaFighterJet className='bg-light' color='#cf331f' size={140} />
          </li>
          <li>
            <h3 className='header-sm'>See the winners</h3>
            <FaTrophy className='bg-light' color='#e3e31e' size={140} />
          </li>
        </ol>
      </div>
    );
  }
}

export default Instructions;
