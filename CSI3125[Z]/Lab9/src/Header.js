import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.span``;

const Item = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  font-weight: 700;
  padding: 15px;
  width: 100%;
  &,
  &:hover {
    color: #333;
    text-decoration: none;
  }
  &:focus {
    outline: 0;
  }
`;

const Container = styled.div`
  background-color: #fff;
  border-color: #ddd;
`;

const Wrapper = styled.span`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Header = ({ title, icon, onClick, id }) => {
  const handleClick = event => {
    onClick(id);
  };

  return (
    <Container>
      <Item onClick={handleClick}>
        <Wrapper>
          <Title>{title}</Title>
        </Wrapper>
      </Item>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

Header.defaultProps = {
  icon: "chevron-down"
};

export default Header;
