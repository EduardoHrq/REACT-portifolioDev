import { ArrowDown } from "lucide-react";
import { DialogClose, DialogHeader, DialogPortal } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { DialogContainerContent } from "./styles";

interface projectProps {
  title: string;
  description: string;
  masterTecs: [string];
  image: string;
  status: string;
  gitRepo: string;
  demo: string;
}

export function ProjectModal(props: projectProps) {
  return (
    <DialogPortal>
      <DialogContainerContent image={props.image} className="md:w-[70lvw] w-[90lvw] px-0">
        <DialogHeader>
          <DialogClose asChild>
            <div className="size-4 rounded-full bg-red-500 absolute top-[10px] left-[10px]"></div>
          </DialogClose>
        </DialogHeader>
        <ArrowDown size={70} className="absolute left-[47%] top-[13rem] text-white drop-shadow-xl animate-bounce"/>
        <ScrollArea>
          <div className="w-full text-white bg-zinc-950 md:mt-[16rem] mt-20 py-4 px-4  space-y-8">
            <h1 className="bg-zinc-950 top-0 md:text-[3rem] text-[1.5rem] flex items-center sticky">
              <div className="font-bold">{props.title}</div>
              {props.status.trim().replace(" ", "").toLowerCase() ==
              "inprogress" ? (
                <div className="absolute right-0 text-[.7rem] flex items-center gap-2 bg-orange-700 p-1 px-2 rounded-full">
                  {props.status}
                  <div className="size-[16px] rounded-full bg-orange-500"></div>
                </div>
              ) : null}
              {props.status.trim().replace(" ", "").toLowerCase() ==
              "maintence" ? (
                <div className="absolute right-0 text-[.7rem] flex items-center gap-4 bg-blue-700 p-2 rounded-full">
                  {props.status}
                  <div className="size-[16px] rounded-full bg-blue-500"></div>
                </div>
              ) : null}
              {props.status.trim().replace(" ", "").toLowerCase() == "done" ? (
                <div className="absolute right-0 text-[.7rem] flex items-center gap-4 bg-green-700 p-2 rounded-full">
                  {props.status}
                  <div className="size-[16px] rounded-full bg-green-500"></div>
                </div>
              ) : null}
            </h1>

            <div>carrousel</div>

            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Description</p>
              <div>{props.description}</div>
            </div>
          </div>
        </ScrollArea>
      </DialogContainerContent>
    </DialogPortal>
  );
}
