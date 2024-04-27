import { ArrowDown } from "lucide-react";
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

              <div>carrousel</div>

              <div className="space-y-3">
                <p className="font-bold uppercase">Description</p>
                <div>{props.description}</div>
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
                <p className="font-bold uppercase">propriedades</p>
                <div className="text-white">
                  <div className="flex gap-2 items-center">
                    <span>status:</span>
                    {props.status.trim().replace(" ", "").toLowerCase() ==
                    "inprogress" ? (
                      <div className="w-max text-[.7rem] flex items-center gap-2 bg-orange-700 p-1 px-2 rounded-full">
                        {props.status}
                        <div className="size-[16px] rounded-full bg-orange-500"></div>
                      </div>
                    ) : null}
                    {props.status.trim().replace(" ", "").toLowerCase() ==
                    "maintence" ? (
                      <div className="w-max text-[.7rem] flex items-center gap-4 bg-blue-700 p-2 rounded-full">
                        {props.status}
                        <div className="size-[16px] rounded-full bg-blue-500"></div>
                      </div>
                    ) : null}
                    {props.status.trim().replace(" ", "").toLowerCase() ==
                    "done" ? (
                      <div className="w-max text-[.7rem] flex items-center gap-4 bg-green-700 p-2 rounded-full">
                        {props.status}
                        <div className="size-[16px] rounded-full bg-green-500"></div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-bold uppercase">Description</p>
                <div>{props.description}</div>
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
            <div>
              <img src={props.image} alt="" width={500}/>
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
                    <SkillsIcons key={value + value} name={value} size={50} />
                  );
                })}
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-bold uppercase">propriedades</p>
              <div className="text-white space-y-3">
                <div className="flex gap-2 items-center">
                  <span>Owner:</span>
                  <div>EduardoHrq</div>
                </div>
                <div className="flex gap-2 items-center">
                  <span>Created At:</span>
                  <div>EduardoHrq</div>
                </div>
                <div className="flex gap-2 items-center">
                  <span>Updated At:</span>
                  <div>EduardoHrq</div>
                </div>

                <div className="flex gap-2 items-center">
                  <span>status:</span>
                  {props.status.trim().replace(" ", "").toLowerCase() ==
                  "inprogress" ? (
                    <div className="w-max text-[.7rem] flex items-center gap-2 bg-orange-700 p-1 px-2 rounded-full">
                      {props.status}
                      <div className="size-[16px] rounded-full bg-orange-500"></div>
                    </div>
                  ) : null}
                  {props.status.trim().replace(" ", "").toLowerCase() ==
                  "maintence" ? (
                    <div className="w-max text-[.7rem] flex items-center gap-4 bg-blue-700 p-2 rounded-full">
                      {props.status}
                      <div className="size-[16px] rounded-full bg-blue-500"></div>
                    </div>
                  ) : null}
                  {props.status.trim().replace(" ", "").toLowerCase() ==
                  "done" ? (
                    <div className="w-max text-[.7rem] flex items-center gap-4 bg-green-700 p-2 rounded-full">
                      {props.status}
                      <div className="size-[16px] rounded-full bg-green-500"></div>
                    </div>
                  ) : null}
                </div>

              </div>
            </div>
            <div className="space-y-3">
              <p className="font-bold uppercase">Description</p>
              <div>{props.description}</div>
            </div>
          </div>
        </ScrollArea>
      </DialogContainerContent>
    </DialogPortal>
  );
}
