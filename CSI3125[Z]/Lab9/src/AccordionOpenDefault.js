import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Collapse from "./Collapse";
import Header from "./Header";

const Body = styled.div`
  border-color: transparent;
  border-style: solid;
  border-width: 1px 0 0 0;
  ${props =>
    props.isOpen &&
    css`
      padding: 15px;
      border-color: #ddd;
    `}
`;

const Container = styled.div`
  background-color: #fff;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: #ddd;
  &:last-child {
    border: 0;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
`;

const Accordion = ({ list, icon }) => {
  const [isActiveIndex, setActiveIndex] = useState(null);

  const toggleItem = index => {
    setActiveIndex(isActiveIndex === index ? null : index);
  };

  global.defaultOpen = true;

  function checkOpen(index) {

    var result = true; 

    if (global.defaultOpen === true){
      toggleItem;
      result = global.defaultOpen;
      global.defaultOpen = false;
            
    }
    else {
      result = isActiveIndex === index;
    }
    
    return result;
  };

  return (
    <Wrapper>
      {list.map((item, index) => {
        const t = checkOpen(index);

        return (
          <Container key={index}>
            <Header
              title={item.title}
              icon={icon}
              id={index}
              onClick={toggleItem}
            />
            <Body isOpen={t}>
              <Collapse isOpen={t}>{item.content}</Collapse>
            </Body>
          </Container>
        );
      })}
    </Wrapper>
  );
};

Accordion.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node
    }).isRequired
  ).isRequired,
  icon: PropTypes.string
};

Accordion.defaultProps = {
  icon: "down-chevron"
};

export default Accordion;
