import styledComponents from "styled-components";

const StyledBurger = styledComponents.button`
  position: fixed;
  top: 38px;
  right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  transition: all 300ms linear;

  div {
    width: 2rem;
    height: 0.1rem;
    background: black;
    transition: all 300ms linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, toggle }) => {
  return (
    <StyledBurger open={open} onClick={toggle}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
