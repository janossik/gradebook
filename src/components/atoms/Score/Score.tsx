import styled from "styled-components";

const Wrapper = styled.span<{ score: number }>`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background: ${({ score }) => (score > 4 ? "#8FCB81" : score > 2 ? "#E1D888" : "#cb8581")};
  color: snow;
  border-radius: 100%;
`;

const Score = ({ score }: { score: number }) => <Wrapper score={score}>{score}</Wrapper>;

export default Score;
