import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class BSNavbar extends Component {
    render() {
        return (
            <div>
       <Navbar fixed="top" variant="dark">
    <Navbar.Brand href="#home">
        <navbar style={{ fontSize: '25px'}}>Matthew's <i class="fas fa-atom" style={{ color:'skyblue'}}></i> Portfolio</navbar>
    </Navbar.Brand>
  </Navbar>
  </div>
        )
    }
}

export default BSNavbar