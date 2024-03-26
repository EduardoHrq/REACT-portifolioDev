import { ScrollArea } from "@/components/ui/scroll-area";
import styled from "styled-components";

export const Layout = styled.main`
  position: fixed;
  inset: 0;
`;

export const ContentContainer = styled(ScrollArea)`
  min-width: 368px;
  max-width: 60rem;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  @keyframes showOutlet {
    from {
      scale: 0.7;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  animation: showOutlet 1s ease;
`;