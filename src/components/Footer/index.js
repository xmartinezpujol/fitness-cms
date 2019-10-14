import React from "react";
import logo from "../../img/logo.svg";
import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";
import twitter from "../../img/social/twitter.svg";
import vimeo from "../../img/social/vimeo.svg";
import FooterContainer, { FooterLink, FooterLogo, SocialLinks } from "./styles";

const styledNavItem = {
  color: "white",
  padding: "0 10px"
};

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <FooterContainer padding={20} type="black">
          <div>
            <FooterLogo src={logo} alt="Kaldi" />
          </div>
          <ul className="menu-list">
            <li>
              <FooterLink to="/" style={styledNavItem}>
                Home
              </FooterLink>
            </li>
            <li>
              <FooterLink style={styledNavItem} to="/about">
                About
              </FooterLink>
            </li>
            <li>
              <FooterLink style={styledNavItem} to="/products">
                Products
              </FooterLink>
            </li>
            <li>
              <FooterLink style={styledNavItem} to="/contact/examples">
                Form Examples
              </FooterLink>
            </li>
            <li>
              <a
                style={styledNavItem}
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin
              </a>
            </li>
          </ul>
          <section>
            <ul className="menu-list">
              <li>
                <FooterLink style={styledNavItem} to="/blog">
                  Latest Stories
                </FooterLink>
              </li>
              <li>
                <FooterLink style={styledNavItem} to="/contact">
                  Contact
                </FooterLink>
              </li>
            </ul>
          </section>
          <SocialLinks>
            <a title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="vimeo" href="https://vimeo.com">
              <img
                src={vimeo}
                alt="Vimeo"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </SocialLinks>
        </FooterContainer>
      </footer>
    );
  }
}

export default Footer;
