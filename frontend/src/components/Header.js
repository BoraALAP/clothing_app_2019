import React from "react";
import styled from "styled-components";

const Styled = styled.div`
    display: grid;
    box-sizing: content-box;
`;

const H1 = styled.h1`
  color: ${props => props.theme.accent.main}
`

const Img =styled.img`
  width: 10em;
  display: grid;
`

const LogoCont = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid ${props => props.theme.black}
  margin: 10px;
`

const Header = () => {
  return (
    <Styled>
      <LogoCont>
        <Img src="https://ca.icebreaker.com/on/demandware.static/Sites-IB-CA-Site/-/default/dwabefb671/images/logo/icebreaker-logo-gray.svg" />
      </LogoCont>
    </Styled>
  );
};

export default Header;
