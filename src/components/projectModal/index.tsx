import { ArrowDown, Eye, Github } from "lucide-react";
import { DialogClose, DialogHeader, DialogPortal } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { DialogContainerContent, DrawerContainerContent } from "./styles";
import { DrawerPortal } from "../ui/drawer";
import { SkillsIcons } from "../skillsIcons";
import { useEffect, useState } from "react";
import axios from "axios";

interface projectProps {
  title: string;
  description: string;
  masterTecs: [string];
  image: string;
  status: string;
  gitRepo: string;
  demo: string;
  inDesktop: boolean;
}

interface responseGitRepo {
  size: number;
  owner: string;
  ownerPic: string;
  createdAt: string;
  updatedAt: string;
  topics: string[];
}

export function ProjectModal(props: projectProps) {
  const [repoGit, setRepoGit] = useState<responseGitRepo>();

  useEffect(() => {
    axios(
      `https://api.github.com/repos/eduardohrq/${props.title
        .trim()
        .replace(" ", "")
        .toLowerCase()}`
    )
      .then((res) => res.data)
      .then((data) => {
        console.log(data.owner.login);

        setRepoGit({
          size: data.size,
          owner: data.owner.login,
          ownerPic: data.owner.avartar_url,
          topics: data.topics,
          updatedAt: data.updated_at,
          createdAt: data.created_at,
        });
      });
  }, [props.title]);

  console.log(repoGit);

  if (!props.inDesktop) {
    return (
      <DrawerPortal>
        <DrawerContainerContent image={props.image} className="h-[75lvh] px-0">
          <ArrowDown
            size={70}
            className="absolute left-[47%] top-[13rem] text-white drop-shadow-xl animate-bounce"
          />
          <ScrollArea>
            <div className="w-full text-white bg-zinc-950 mt-[9rem] py-4 px-4  space-y-8">
              <h1 className="bg-zinc-950 top-0 text-[1.5rem] flex items-center sticky border-b-2">
                <div className="font-bold leading-loose my-3">
                  {props.title}
                </div>
              </h1>

              <div className="space-y-3">
                <p className="font-bold uppercase">propriedades</p>
                <div className="text-zinc-100 flex items-center justify-center flex-wrap gap-4">
                  <div className="flex gap-2 items-center bg-zinc-700 w-max pr-4 rounded-lg overflow-hidden">
                    <span className=" h-10 leading-10 px-3 uppercase bg-zinc-800">
                      Owner
                    </span>
                    <div className="font-bold tracking-wide">EduardoHrq</div>
                  </div>

                  {props.status.trim().replace(" ", "").toLowerCase() ==
                  "inprogress" ? (
                    <div className="flex gap-2 items-center bg-orange-800 w-max pr-4 rounded-lg overflow-hidden">
                      <span className=" h-10 leading-10 px-3 uppercase bg-orange-900">
                        status
                      </span>
                      <div className="flex items-center gap-2">
                        {props.status}
                        <div className="size-[16px] rounded-full bg-orange-500"></div>
                      </div>
                    </div>
                  ) : null}
                  {props.status.trim().replace(" ", "").toLowerCase() ==
                  "maintence" ? (
                    <div className="flex gap-2 items-center bg-blue-800 w-max px-4 rounded-lg">
                      <span className="border-r-2 h-10 leading-10 pr-3 uppercase">
                        status
                      </span>
                      <div className="flex items-center gap-2">
                        {props.status}
                        <div className="size-[16px] rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                  ) : null}
                  {props.status.trim().replace(" ", "").toLowerCase() ==
                  "done" ? (
                    <div className="flex gap-2 items-center bg-green-800 w-max px-4 rounded-lg">
                      <span className="border-r-2 h-10 leading-10 pr-3 uppercase">
                        status
                      </span>
                      <div className="flex items-center gap-2">
                        {props.status}
                        <div className="size-[16px] rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex gap-2 items-center bg-yellow-800 w-max pr-4 rounded-lg overflow-hidden">
                    <span className="h-10 leading-10 px-3 uppercase bg-yellow-900">
                      Size
                    </span>
                    <div className="font-bold tracking-wide">100 Kb</div>
                  </div>

                  <div className="flex gap-2 items-center bg-sky-700 w-max pr-4 rounded-lg overflow-hidden">
                    <span className="h-10 leading-10 px-3 uppercase bg-sky-800">
                      Created At
                    </span>
                    <div className="font-bold tracking-wide">data</div>
                  </div>

                  <div className="flex gap-2 items-center bg-indigo-700 w-max pr-4 rounded-lg overflow-hidden">
                    <span className="  h-10 leading-10 px-3 uppercase bg-indigo-800">
                      Updated At
                    </span>
                    <div className="font-bold tracking-wide">data</div>
                  </div>
                </div>
              </div>

              <div>carrousel</div>

              <div className="space-y-3">
                <p className="font-bold uppercase">Description</p>
                <div className="text-justify">{props.description}</div>
              </div>

              <div className="space-y-3">
                <p className="font-bold uppercase">ferramentas</p>
                <div className="flex gap-5">
                  {props.masterTecs.map((value) => {
                    return (
                      <SkillsIcons key={value + value} name={value} size={50} />
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-bold uppercase">links</p>
                <div className="flex md:flex-row flex-col gap-5 items-center justify-around">
                  <a href="">
                    <div
                      className="relative bg-zinc-900 w-[300px] h-[100px] md:rounded-t-xl group
                    ring ring-zinc-500 rounded-xl flex items-center justify-center gap-5"
                    >
                      <Github
                        size={50}
                        className="transition-all fill-zinc-300 text-zinc-300"
                      />
                      <span className="font-bold text-[2rem] text-zinc-200">
                        Github
                      </span>
                    </div>
                  </a>
                  <a href="">
                    <div
                      className="relative bg-zinc-900 w-[300px] h-[100px] md:rounded-t-xl group
                    ring ring-zinc-500 rounded-xl flex items-center justify-center gap-5"
                    >
                      <Eye
                        size={50}
                        className="transition-all fill-zinc-300 text-zinc-900"
                      />
                      <span className="font-bold text-[2rem] text-zinc-200">
                        Demo
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DrawerContainerContent>
      </DrawerPortal>
    );
  }
  return (
    <DialogPortal>
      <DialogContainerContent
        image={props.image}
        className="w-[60lvw] h-[95lvh] px-0"
      >
        <DialogHeader>
          <DialogClose asChild>
            <div className="size-4 rounded-full bg-red-500 absolute top-[10px] left-[10px]"></div>
          </DialogClose>
        </DialogHeader>
        <ArrowDown
          size={70}
          className="absolute left-[47%] top-[19rem] text-white drop-shadow-xl animate-bounce"
        />
        <ScrollArea>
          <div className="w-full text-white bg-zinc-950 mt-[16rem] py-4 px-4  space-y-8">
            <h1 className="bg-zinc-950 top-0 text-[2.7rem] flex items-center sticky border-b-2">
              <div className="font-bold leading-loose my-3">{props.title}</div>
            </h1>

            <div className="space-y-3">
              <p className="font-bold uppercase">propriedades</p>
              <div className="text-zinc-100 flex items-center justify-center flex-wrap gap-4">
                <div className="flex gap-2 items-center bg-zinc-700 w-max pr-4 rounded-lg overflow-hidden">
                  <span className=" h-10 leading-10 px-3 uppercase bg-zinc-800">
                    Owner
                  </span>
                  <div className="font-bold tracking-wide">EduardoHrq</div>
                </div>

                {props.status.trim().replace(" ", "").toLowerCase() ==
                "inprogress" ? (
                  <div className="flex gap-2 items-center bg-orange-800 w-max pr-4 rounded-lg overflow-hidden">
                    <span className=" h-10 leading-10 px-3 uppercase bg-orange-900">
                      status
                    </span>
                    <div className="flex items-center gap-2">
                      {props.status}
                      <div className="size-[16px] rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                ) : null}
                {props.status.trim().replace(" ", "").toLowerCase() ==
                "maintence" ? (
                  <div className="flex gap-2 items-center bg-blue-800 w-max px-4 rounded-lg">
                    <span className="border-r-2 h-10 leading-10 pr-3 uppercase">
                      status
                    </span>
                    <div className="flex items-center gap-2">
                      {props.status}
                      <div className="size-[16px] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                ) : null}
                {props.status.trim().replace(" ", "").toLowerCase() ==
                "done" ? (
                  <div className="flex gap-2 items-center bg-green-800 w-max px-4 rounded-lg">
                    <span className="border-r-2 h-10 leading-10 pr-3 uppercase">
                      status
                    </span>
                    <div className="flex items-center gap-2">
                      {props.status}
                      <div className="size-[16px] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                ) : null}

                <div className="flex gap-2 items-center bg-yellow-800 w-max pr-4 rounded-lg overflow-hidden">
                  <span className="h-10 leading-10 px-3 uppercase bg-yellow-900">
                    Size
                  </span>
                  <div className="font-bold tracking-wide">100 Kb</div>
                </div>

                <div className="flex gap-2 items-center bg-sky-700 w-max pr-4 rounded-lg overflow-hidden">
                  <span className="h-10 leading-10 px-3 uppercase bg-sky-800">
                    Created At
                  </span>
                  <div className="font-bold tracking-wide">data</div>
                </div>

                <div className="flex gap-2 items-center bg-indigo-700 w-max pr-4 rounded-lg overflow-hidden">
                  <span className="  h-10 leading-10 px-3 uppercase bg-indigo-800">
                    Updated At
                  </span>
                  <div className="font-bold tracking-wide">data</div>
                </div>
              </div>
            </div>

            <div>
              <img src={props.image} alt="" width={500} />
            </div>
            <div className="space-y-3">
              <p className="font-bold uppercase text-[1.2rem]">Description</p>
              <div className="text-justify ">{props.description}</div>
            </div>
            <div className="space-y-3">
              <p className="font-bold uppercase text-[1.2rem]">ferramentas</p>
              <div className="flex gap-5">
                {props.masterTecs.map((value) => {
                  return (
                    <SkillsIcons
                      key={value + value}
                      name={value}
                      size={50}
                      icon
                    />
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase">links</p>
              <div className="flex items-center justify-around">
                <a href="">
                  <div className="relative bg-zinc-900 w-[300px] h-[100px] rounded-t-xl group hover:bg-zinc-200">
                    <Github
                      size={50}
                      className="absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 
                      group-hover:left-[35%] transition-all group-hover:fill-zinc-900 
                      group-hover:text-zinc-900 "
                    />
                    <span
                      className="font-bold text-[2rem] absolute opacity-0 -translate-y-1/2 
                    -translate-x-1/2 left-1/2 top-1/2 group-hover:opacity-100 transition-all
                    group-hover:left-[65%] text-zinc-900"
                    >
                      Github
                    </span>
                  </div>
                </a>
                <a href="">
                  <div className="relative bg-zinc-900 w-[300px] h-[100px] rounded-t-xl group hover:bg-zinc-200">
                    <span
                      className="font-bold text-[2rem] absolute -translate-y-1/2 
                      -translate-x-1/2 left-1/2 top-1/2 transition-all
                      group-hover:left-[35%] text-zinc-200 group-hover:text-zinc-800"
                    >
                      Demo
                    </span>
                      <Eye
                        size={50}
                        className="absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 
                        group-hover:left-[65%] transition-all group-hover:text-zinc-900 opacity-0
                        group-hover:opacity-100"
                      />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContainerContent>
    </DialogPortal>
  );
}
