import styled from "styled-components";
import { View } from "wasabi-kit";
import { Link } from "gatsby";

const FooterContainer = styled(View)``;

const FooterMenu = styled(View)``;

const FooterLink = styled(Link)`
  text-decoration: none;
`;

const FooterLogo = styled.img`
  width: 168px;
  height: 120px;
  margin-right: 50px;
`;

const SocialLinks = styled(View)``;

export default FooterContainer;

export { FooterMenu, FooterLink, FooterLogo, SocialLinks };
