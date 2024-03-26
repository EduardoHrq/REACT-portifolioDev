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
          src="https://i.imgur.com/MhkgpUH.png"
          className="object-cover aspect-auto w-[6rem] rounded-full"
          alt="profile"
        />
        <p>Eduardo Henrique</p>
      </div>

      <Separator orientation="horizontal" className="my-3" />

      <LinksContainer className="flex flex-col space-y-5">
        <NavLink to={"/"}>
          <User />
          ShowAll
        </NavLink>
        <NavLink to={"skills"}>
          <Circle />
          skills
        </NavLink>
        <NavLink to={"/"}>
          <Circle />
          Portifolio
        </NavLink>
        <NavLink to={"/"}>
          <Circle />
          Certificates
        </NavLink>
        <NavLink to={"/"}>
          <Circle />
          Contact
        </NavLink>
      </LinksContainer>

      <Separator orientation="horizontal" className="my-3" />

      <div className="flex justify-between my-5">
        <div>
          <Github />
        </div>
        <div>
          <Linkedin />
        </div>
        <div>
          <Circle />
        </div>
      </div>
    </SideContainer>
  );
}
