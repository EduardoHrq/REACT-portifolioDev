import { Eye, Github, Info } from "lucide-react";
import { SkillsIcons } from "../skillsIcons";
import { BoxStatus } from "./styles";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ProjectModal } from "../projectModal";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Drawer, DrawerTrigger } from "../ui/drawer";

interface projectProps {
  title: string;
  shortDesc: string;
  description: string;
  masterTecs: [string];
  image: string;
  status: string;
  gitRepo: string;
  demo: string;
  reversed?: boolean;
}

export function ProjectContainer(props: projectProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex flex-col md:flex-row gap-2 p-3 bg-zinc-800 bg-opacity-75 rounded-xl md:bg-transparent">
      <div className="relative hover:scale-110 transition-all">
        <Dialog>
          <DialogTrigger asChild>
            <button className="relative group outline-none border-none">
              <img
                src={props.image}
                alt=""
                className="md:w-[300px] md:h-[200px] rounded-[12px] group-hover:brightness-50 md:group-hover:delay-500 ring ring-zinc-200"
              />
              <button className="absolute flex items-center justify-center inset-0 opacity-0 md:group-hover:delay-500 group-hover:scale-100 scale-0 group-hover:opacity-100 transition-all">
                <Eye size={70} />
              </button>
            </button>
          </DialogTrigger>
          <DialogContent className="*:text-zinc-100 w-[97lvw] p-1 ring ring-zinc-200 rounded-[18px]">
            <DialogHeader className="">
              <DialogClose asChild>
                <button className="size-4 bg-red-500 rounded-full absolute top-3 left-3"></button>
              </DialogClose>
              <DialogTitle className="mx-auto">
                Image to {props.title}
              </DialogTitle>
            </DialogHeader>
            <img src={props.image} alt="" className="w-full" />
          </DialogContent>
        </Dialog>

        <BoxStatus
          className={
            "absolute top-0 right-0 flex items-center gap-4 px-3 py-1 rounded-full " +
            props.status.trim().replace(" ", "").toUpperCase()
          }
        >
          <span>{props.status}</span>
          <div className={"size-4 rounded-full"}></div>
        </BoxStatus>
      </div>
      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex flex-col flex-1 gap-5 md:gap-0 justify-between py-4 text-center">
          <h1 className="text-2xl font-bold hover:scale-125 w-max mx-auto transition-all">
            {props.title}
          </h1>
          <p>{props.shortDesc}</p>
          <div className="flex mx-auto px-3 py-1 gap-3 rounded-xl bg-zinc-500 bg-opacity-50 w-max">
            {props.masterTecs.map((tech) => {
              return <SkillsIcons key={tech} name={tech} icon />;
            })}
            <div>...</div>
          </div>
        </div>
        <div className="flex md:flex-col justify-between md:*:w-[50px] *:flex-1 *:flex *:items-center *:justify-center p-2">
          {isDesktop ? (
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-blue-500 md:rounded-bl-none md:rounded-t-lg rounded-l-lg py-2 md:p-0 hover:brightness-90 transition-all hover:scale-110">
                  <Info />
                </button>
              </DialogTrigger>
              <ProjectModal
                inDesktop={isDesktop}
                image={props.image}
                title={props.title}
                demo={props.demo}
                description={props.description}
                gitRepo={props.gitRepo}
                masterTecs={props.masterTecs}
                status={props.status}
              />
            </Dialog>
          ) : (
            <Drawer>
              <DrawerTrigger asChild>
                <button className="bg-blue-500 md:rounded-bl-none md:rounded-t-lg rounded-l-lg py-2 md:p-0 hover:brightness-90 transition-all hover:scale-110">
                  <Info />
                </button>
              </DrawerTrigger>
              <ProjectModal
                inDesktop={isDesktop}
                image={props.image}
                title={props.title}
                demo={props.demo}
                description={props.description}
                gitRepo={props.gitRepo}
                masterTecs={props.masterTecs}
                status={props.status}
              />
            </Drawer>
          )}
          <a
            href={props.demo}
            target="_blank"
            className="bg-zinc-500 hover:brightness-90 py-2 transition-all hover:scale-110"
          >
            <Eye />
          </a>
          <a
            href={props.gitRepo}
            target="_blank"
            className="bg-zinc-200 text-black md:rounded-tr-none md:rounded-b-lg rounded-r-lg py-2 hover:brightness-90 transition-all hover:scale-110"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
