import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)<{ active?: number }>`
  display: flex;
  height: 50px;
  min-width: 50px;
  margin: 0 5px 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 30px;
  transition: 300ms;
  :hover {
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.background};
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.background};
      :hover {
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.background};
      }
    `}
`;
