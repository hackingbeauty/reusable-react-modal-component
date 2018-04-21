import React, { Component }  from 'react'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap'

/* component styles */
import { styles } from './styles.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Reusable React Modal Component</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="http://singlepageapplication.com">
              Get The Course "How To Write A Single Page Application"!
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header
