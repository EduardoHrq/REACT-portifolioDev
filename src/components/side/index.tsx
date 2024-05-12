import { NavLink } from "react-router-dom";
import { LinksContainer, SideContainer } from "./styles";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ArrowLeft, Bag, Brain, Certificate, DeviceMobile, GithubLogo, LinkedinLogo, ReadCvLogo, User } from "@phosphor-icons/react";

export function Side() {
  return (
    <SideContainer
      id="sideContainer"
      className="backdrop-blur-md backdrop-saturate-200 bg-zinc-900 bg-opacity-70 py-2 px-5 "
    >
      <Button
        variant={"ghost"}
        className="md:hidden p-1 leading-none absolute right-0 top-0 transition-all"
        onClick={(e) => {
          document.getElementById("sideContainer")!.classList.toggle("hide");
          e.currentTarget.classList.toggle("right-[-1.5rem]");
          e.currentTarget.classList.toggle("rotate-180");
        }}
      >
        <ArrowLeft size={25} weight="fill" />
      </Button>

      <div className="flex flex-col items-center justify-center my-5">
        <img
          src="https://i.imgur.com/qmVWOlh.jpg"
          className="object-cover aspect-auto w-[6rem] rounded-full"
          alt="profile"
        />
        <p className="font-bold mt-5 tracking-wider">Eduardo Henrique</p>
      </div>

      <Separator orientation="horizontal" className="my-3" />

      <LinksContainer className="flex flex-col space-y-5 ">
        <NavLink
          to={"/"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-sky-800"
          }
        >
          <User weight="fill" size={25} className="fill-zinc-100 text-zinc-100" />
          ShowAll
        </NavLink>
        <NavLink
          to={"skills"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-sky-800"
          }
        >
          <Brain size={25} weight="fill" />
          Skills
        </NavLink>
        <NavLink
          to={"portifolio"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-sky-800"
          }
        >
          <Bag weight="fill" size={25} />
          Portifolio
        </NavLink>
        <NavLink
          to={"certificates"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-sky-800"
          }
        >
          <Certificate size={25} weight="fill" />
          Certificates
        </NavLink>
        <NavLink
          to={"contact"}
          className={
            "[&.active]:text-white [&.active]:font-bold [&.active]:bg-sky-800"
          }
        >
          <DeviceMobile size={25} weight="fill" />
          Contact
        </NavLink>
      </LinksContainer>

      <Separator orientation="horizontal" className="my-3" />

      <div className="flex justify-between my-5 *:no-underline *:relative *:cursor-pointer ">
        <a
          className="group hover:bg-zinc-200 flex items-center justify-center rounded-full transition-all p-2"
          href="https://github.com/eduardohrq"
          target="_blank"
        >
          <GithubLogo weight="fill" size={30} className="group-hover:fill-black group-hover:text-black transition-all" />
          <div className="absolute z-[-2] opacity-0 scale-0 transition-all origin-left top-0 left-[100%] bg-zinc-800 p-2 rounded group-hover:z-[2] group-hover:opacity-100 group-hover:scale-100 group-hover:delay-1000">
            Github/Eduardohrq
          </div>
        </a>
        <a
          className="group hover:bg-blue-500 p-2 flex items-center justify-center rounded-full transition-all"
          href="https://linkedin.com/in/eduardohrq"
        >
          <LinkedinLogo weight="fill" size={30} className="fill-zinc-100 text-zinc-100 group-hover:fill-zinc-100 group-hover:text-zinc-100 transition-all" />
          <div className="absolute z-[-2] opacity-0 scale-0 transition-all origin-left top-0 left-[100%] bg-zinc-800 p-2 rounded group-hover:z-[2] group-hover:opacity-100 group-hover:scale-100 group-hover:delay-1000">
            Linkedin/Eduardohrq
          </div>
        </a>

        <a className="group p-2 hover:bg-zinc-700 flex items-center justify-center rounded-full transition-all" href="#" target="_blank">
          <ReadCvLogo size={30} weight="fill" className="fill-zinc-100 text-zinc-100" />
          <div className="absolute z-[-2] opacity-0 scale-0 transition-all origin-left top-0 left-[100%] bg-zinc-800 p-2 rounded group-hover:z-[2] group-hover:opacity-100 group-hover:scale-100 group-hover:delay-1000">
            CV
          </div>
        </a>
      </div>
    </SideContainer>
  );
}
