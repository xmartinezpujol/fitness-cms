import styled from "styled-components";
import { View } from "wasabi-kit";
import { Link } from "gatsby";

const NavbarContainer = styled(View)``;

const NavbarMenu = styled(View)``;

const NavbarLink = styled(Link)`
  text-decoration: none;
`;

const NavbarLogo = styled.img`
  width: 88px;
  margin-right: 50px;
`;

export default NavbarContainer;

export { NavbarMenu, NavbarLink, NavbarLogo };
