import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  :last-child {
    margin-top: auto;
  }
`;

export const BodyLink = styled(NavLink)`
  display: block;
  height: 50px;
  width: 100px;
  padding: 10px 0;
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.font.size.m};
  &::first-letter {
    text-transform: uppercase;
  }
`;
