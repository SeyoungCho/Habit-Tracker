import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <i className="navbar-logo fas fa-leaf"/>
          <span>Habit Tracker</span>
        </div>
        
        <div className="navbar-count">
          <span>{this.props.count}</span>
        </div>

        <ul className="navbar-links">
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
        </ul>
        
      </nav>
    );
  }
}

export default Navbar;