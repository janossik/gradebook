import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  margin-bottom: 20px;
  background-color: rgba(170, 170, 170, 0.3);
  border-radius: 20px;
  gap: 15px;
  line-height: 1.5;
`;

export const ContentWrapper = styled.section`
  display: flex;
  gap: 10px;
  img {
    padding-left: 10px;
    object-fit: cover;
    pointer-events: none;
  }
  div {
    display: flex;
    flex-direction: column;
    footer {
      padding: 10px 0;
      margin-top: auto;
    }
    img {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
