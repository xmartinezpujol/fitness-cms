import React from "react";
import { Link } from "gatsby";
import github from "../../img/github-icon.svg";
import logo from "../../img/logo.svg";
import NavbarContainer, { NavbarLink, NavbarLogo, NavbarMenu } from "./styles";
import { Text } from "wasabi-kit";

const styledNavItem = {
  color: "white",
  padding: "0 10px"
};

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation">
        <NavbarContainer align="center" padding={20} type="black" height={100}>
          <div className="navbar-brand">
            <NavbarLink to="/" className="navbar-item" title="Logo">
              <NavbarLogo src={logo} alt="Kaldi" />
            </NavbarLink>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <NavbarMenu
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <NavbarLink to="/about">
              <Text style={styledNavItem} type="span">
                About
              </Text>
            </NavbarLink>
            <NavbarLink to="/products">
              <Text style={styledNavItem} type="span">
                Products
              </Text>
            </NavbarLink>
            <NavbarLink to="/blog">
              <Text style={styledNavItem} type="span">
                Blog
              </Text>
            </NavbarLink>
            <NavbarLink to="/contact">
              <Text style={styledNavItem} type="span">
                Contact
              </Text>
            </NavbarLink>
            <NavbarLink to="/contact/examples">
              <Text style={styledNavItem} type="span">
                Form examples
              </Text>
            </NavbarLink>
          </NavbarMenu>
        </NavbarContainer>
      </nav>
    );
  }
};

export default Navbar;
