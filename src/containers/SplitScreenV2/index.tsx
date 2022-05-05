import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 24px 16px;
`;

const Pane = styled.div<{ weight: number }>`
  flex: ${(props) => props.weight};
`;

type Props = {
  children: React.ReactNode[];
  leftWeight: number;
  rightWeight: number;
};

const SplitScreenV2 = ({
  children,
  leftWeight,
  rightWeight,
}: Props): JSX.Element => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreenV2;
