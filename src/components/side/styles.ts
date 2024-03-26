import styled from "styled-components";

export const SideContainer = styled.div`
  @keyframes showSide {
    from {
      opacity: 0;
      transform: translate(-100%, -50%);
    }
    to {
      opacity: 1;
      transform: translate(0, -50%);
    }
  }

  position: fixed;
  z-index: 3;
  transform: translate(0, -50%);
  top: 50%;
  transition: all 0.3s;

  animation: showSide 1s;

  &.hide {
    transform: translate(-100%, -50%);
  }
`;

export const LinksContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.2rem;
    padding-left: 0.7rem;
    padding-right: 2rem;
    line-height: 0;
    font-weight: bold;
    border-radius: 8px;

    transition: all 0.3s;

    &:hover {
      gap: 1.5rem;
      background-color: #71717a25;
    }
  }
`;
