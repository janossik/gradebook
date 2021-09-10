import styled from "styled-components";

const Wrapper = styled.span<{ score: number }>`
  display: flex;
  height: 45px;
  width: 45px;
  justify-content: center;
  align-items: center;
  background: ${({ score }) => (score >= 5 ? "#8FCB81" : score >= 3 ? "#E1D888" : "#cb8581")};
  color: snow;
  border-radius: 100%;
`;

const Score = ({ score }: { score: string }) => <Wrapper score={Number(score)}>{score}</Wrapper>;

export default Score;
