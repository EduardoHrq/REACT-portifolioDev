import styled from "styled-components";
import { DialogContent } from "../ui/dialog";

interface propsDialog {
  image: string;
}

export const DialogContainerContent = styled(DialogContent)<propsDialog>`

  height: 90lvh;

  background-image: url(${p => p.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: fixed;

`;
