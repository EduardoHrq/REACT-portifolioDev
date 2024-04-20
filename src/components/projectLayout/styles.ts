import styled from "styled-components";

export const BoxStatus = styled.div`
  &.DONE {
    background-color: #22c55e40;

    div {
      background-color: #22c55e;
    }
  }
  &.INPROGRESS {
    background-color: #eab30840;

    div {
      background-color: #eab308;
    }
  }
  &.MAINTENCE {
    background-color: #3b82f640;

    div {
      background-color: #3b82f6;
    }
  }
`;
