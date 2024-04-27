import styled from "styled-components";
import { DialogContent } from "../ui/dialog";
import { DrawerContent } from "../ui/drawer";

interface propsDialog {
  image: string;
}

export const DialogContainerContent = styled(DialogContent)<propsDialog>`

  background-image: url(${p => p.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: fixed;

`;


export const DrawerContainerContent = styled(DrawerContent)<propsDialog>`
  background-image: url(${(p) => p.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: fixed;
`;
