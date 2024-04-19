import { NavLink } from "react-router-dom";
import { LinksContainer, SideContainer } from "./styles";
import { ArrowLeft, Circle, Github, Linkedin, User } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Side() {
  return (
    <SideContainer
      id="sideContainer"
      className="backdrop-blur-md backdrop-saturate-200 bg-zinc-900 bg-opacity-70 py-2 px-5 "
    >
      <Button
        variant={"ghost"}
        className="p-1 leading-none absolute right-0 top-0 transition-all"
        onClick={(e) => {
          document.getElementById("sideContainer")!.classList.toggle("hide");
          e.currentTarget.classList.toggle("right-[-1.5rem]");
          e.currentTarget.classList.toggle("rotate-180");
        }}
      >
        <ArrowLeft />
      </Button>

      <div className="flex flex-col items-center justify-center my-5">
        <img
          src="https://i.imgur.com/qmVWOlh.jpg"
          className="object-cover aspect-auto w-[6rem] rounded-full"
          alt="profile"
        />
        <p>Eduardo Henrique</p>
      </div>

      <Separator orientation="horizontal" className="my-3" />

      <LinksContainer className="flex flex-col space-y-5 ">
        <NavLink
          to={"/"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-zinc-700"
          }
        >
          <User className="fill-zinc-100 text-zinc-100" />
          ShowAll
        </NavLink>
        <NavLink
          to={"skills"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-zinc-700"
          }
        >
          <Circle />
          skills
        </NavLink>
        <NavLink
          to={"portifolio"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-zinc-700"
          }
        >
          <Circle />
          Portifolio
        </NavLink>
        <NavLink
          to={"certificates"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-zinc-700"
          }
        >
          <Circle />
          Certificates
        </NavLink>
        <NavLink
          to={"contact"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-zinc-700"
          }
        >
          <Circle />
          Contact
        </NavLink>
      </LinksContainer>

      <Separator orientation="horizontal" className="my-3" />

      <div className="flex justify-between my-5 *:no-underline *:relative *:cursor-pointer ">
        <a
          className="group"
          href="https://github.com/eduardohrq"
          target="_blank"
        >
          <Github className="fill-zinc-100 text-zinc-100" />
          <div className="absolute z-[-2] opacity-0 scale-0 transition-all origin-left top-0 left-[100%] bg-zinc-800 p-2 rounded group-hover:z-[2] group-hover:opacity-100 group-hover:scale-100 group-hover:delay-1000">
            Github/Eduardohrq
          </div>
        </a>
        <a className="group" href="https://linkedin.com/in/eduardohrq">
          <Linkedin className="fill-zinc-100 text-zinc-100" />
          <div className="absolute z-[-2] opacity-0 scale-0 transition-all origin-left top-0 left-[100%] bg-zinc-800 p-2 rounded group-hover:z-[2] group-hover:opacity-100 group-hover:scale-100 group-hover:delay-1000">
            Linkedin/Eduardohrq
          </div>
        </a>
        <a className="group" href="#" target="_blank">
          <Circle className="fill-zinc-100 text-zinc-100" />
          <div className="absolute z-[-2] opacity-0 scale-0 transition-all origin-left top-0 left-[100%] bg-zinc-800 p-2 rounded group-hover:z-[2] group-hover:opacity-100 group-hover:scale-100 group-hover:delay-1000">
            Github/Eduardohrq
          </div>
        </a>
      </div>
    </SideContainer>
  );
}
