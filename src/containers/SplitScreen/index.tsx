import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const Pane = styled.div<{ weight: number }>`
  flex: ${(props) => props.weight};
`;

type Props = {
  left: React.FunctionComponent;
  right: React.FunctionComponent;
};

const SplitScreen = ({ left: Left, right: Right }: Props): JSX.Element => {
  return (
    <Container>
      <Pane weight={1}>
        <Left />
      </Pane>
      <Pane weight={1}>
        <Right />
      </Pane>
    </Container>
  );
};

export default SplitScreen;
