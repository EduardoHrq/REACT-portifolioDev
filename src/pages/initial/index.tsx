import { Separator } from "@/components/ui/separator";
import { ProfileContainer } from "./styles";
import {
  Book,
  Eye,
  Frown,
  Github,
  Linkedin,
  Mail,
  Phone,
  StickyNote,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";

export function Initial() {
  return (
    <div className="space-y-3">
      {/* profile */}
      <ProfileContainer className="backdrop-brightness-150 bg-zinc-500 bg-opacity-15 backdrop-blur-md rounded-xl flex md:flex-row flex-col p-2 space-y-3 space-x-3">
        <img
          src="https://i.imgur.com/MhkgpUH.png"
          alt=""
          className="size-20 md:size-[10rem] mx-auto rounded-full ring dark:ring-zinc-50 ring-zinc-900"
        />
        <Separator orientation="vertical" />
        <div className="space-y-4 flex-1">
          <p className="font-bold text-2xl">Eduardo Henrique Lima Silva</p>
          <p className="opacity-75">Desenvolvedor FullStack</p>
          <div className="flex space-x-3 ">
            <Badge
              variant={"outline"}
              className="bg-zinc-300 dark:bg-zinc-700 px-3 py-1"
            >
              Java
            </Badge>
            <Badge
              variant={"outline"}
              className="bg-zinc-300 dark:bg-zinc-700 px-3 py-1"
            >
              JavaScript
            </Badge>
            <Badge
              variant={"outline"}
              className="bg-zinc-300 dark:bg-zinc-700 px-3 py-1"
            >
              SpringBoot
            </Badge>
            <Badge
              variant={"outline"}
              className="hidden md:block bg-zinc-300 dark:bg-zinc-700 px-3 py-1"
            >
              ReactJS
            </Badge>
            <Badge
              variant={"outline"}
              className="hidden md:block bg-zinc-300 dark:bg-zinc-700 px-3 py-1"
            >
              Typescript
            </Badge>
            <NavLink to={"skills"}>
              <span>...</span>
              <span className="hover:underline">See all</span>
            </NavLink>
          </div>
        </div>
        <Separator orientation="vertical" />

        <div className="grid grid-cols-4 md:grid-cols-2 *:md:size-20 *:size-12 *:flex *:items-center *:justify-center justify-items-center">
          <a
            className="relative"
            href="https://github.com/eduardohrq"
            target="_blank"
          >
            <div className="group">
              <Github className="fill-zinc-50 text-zinc-50 cursor-pointer" />
              <div className="hidden absolute right-0 top-[50%] -translate-y-1/2  w-max z-10 md:flex items-center gap-1 bg-zinc-800 p-2 rounded scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all group-hover:delay-1000">
                <div className="bg-black p-2 rounded-full">
                  <Github className="fill-zinc-50 text-zinc-50" />
                </div>
                <div className="h-[40px] bg-black p-[.5px] opacity-50"></div>
                <div className="space-y-1">
                  <h1 className="font-bold text-[1.3rem]">Github</h1>
                  <p className="text-[1rem] opacity-50">@EduardoHrq</p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="relative"
            href="https://linkedin.com/in/eduardohrq"
            target="_blank"
          >
            <div className="group">
              <Linkedin className="fill-zinc-50 text-zinc-50 cursor-pointer" />
              <div className="hidden absolute w-max right-0 top-[50%] -translate-y-1/2 z-10 md:flex items-center gap-1 bg-zinc-800 p-2 rounded scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all group-hover:delay-1000">
                <div className="bg-blue-500 p-2 rounded-full">
                  <Linkedin className="fill-zinc-50 text-zinc-50" />
                </div>
                <div className="h-[50px] bg-black p-[.5px] opacity-50"></div>
                <div className="space-y-1">
                  <h1 className="font-bold text-[1.2rem]">Linkedin</h1>
                  <p className="text-[.8rem] opacity-50">@EduardoHrq</p>
                  <p className="*:text-[.8rem] flex items-center gap-2 ">
                    <Users className="size-[.8rem]" />
                    <div>127 conexões</div>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="relative"
            href="mailto:eduardohrq.silva06@gmail.com"
            target="_blank"
          >
            <div className="group">
              <Mail className="fill-zinc-500 text-zinc-50" />

              <div className="hidden absolute w-max right-0 top-[50%] -translate-y-1/2 z-10 md:flex items-center space-x-2 bg-zinc-800 p-2 rounded scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all group-hover:delay-1000">
                <div className="bg-zinc-300 p-2 rounded-full">
                  <Mail className="fill-zinc-50 text-zinc-900" />
                </div>
                <div className="h-[50px] bg-black p-[.5px] opacity-50"></div>
                <div className="space-y-1">
                  <h1 className="font-bold text-[1.2rem]">E-mail</h1>
                  <p className="text-[.8rem] opacity-50">
                    eduardohrq.silva06@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="relative"
            href="https://wa.me/61999115197"
            target="_blank"
          >
            <div className="group">
              <Phone className="fill-zinc-50 text-zinc-50" />

              <div className="hidden absolute w-max right-0 top-[50%] -translate-y-1/2 z-10 md:flex items-center space-x-2 bg-zinc-800 p-2 rounded scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all group-hover:delay-1000">
                <div className="bg-green-500 p-2 rounded-full">
                  <Phone className="fill-zinc-50 text-zinc-50" />
                </div>
                <div className="h-[50px] bg-black p-[.5px] opacity-50"></div>
                <div className="space-y-1">
                  <h1 className="font-bold text-[1.2rem]">Celular</h1>
                  <p className="text-[.8rem] opacity-50">(61) 9 99911-5197</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </ProfileContainer>

      {/* BIO */}
      <div className="backdrop-brightness-150 bg-zinc-500 bg-opacity-15 backdrop-blur-md rounded-xl text-justify p-5 ">
        Olá, me chamo Eduardo Henrique, tenho 21 anos de idade, resido em uma
        cidade próxima a Brasília no Goiás, sou um jovem estudioso, criativo e
        que gosta ou sente-se desafiado a resolver problemas. Estou sempre
        estudando esta área (TI) e buscando aprimorar minhas habilidades.
        Atualmente, dezembro de 2023, estou cursando engenharia de software no
        Centro Universitário do Planalto Central Apparecido dos Santos
        (UNICEPLAC), Gama-DF, finalizando o 6 semestre de 8 ao todo.
        <div className="hidden md:block">
          Nesta graduação pude adquirir conhecimentos acerca do ciclo de vida
          completo de um software e questões gerenciais e econômicas. Sendo mais
          específico, pude ver algoritmos, arquiteturas de rede e computadores,
          arquiteturas de software, sistemas operacionais, Scrum, Levantamento
          de requisitos, UML, POO (programação orientada a objetos), Programação
          (java, estrutura de dados, design patterns), Programação Web (Tomcat,
          Rest, HTML - CSS, Bootstrap...), Banco de dados, engenharia econômica
          e inovação, ainda não finalizei o curso, mas posso listar estes
          conhecimentos.
          <br />
          Meus estudos não focam ou estão concentrados somente no curso
          superior, em casa busco constantemente participar de eventos, cursos,
          palestras e comunidades, a fim de acompanhar inovações das
          tecnologias. Com isso possuo certificações em Scrum (emitido pelo
          ScrumStudy), java (emitidos por Rocketseat e Digital innovation one),
          SpringBoot (emitidos por Rocketseat e Digital innovation one), React
          (em estudo pela Rocketseat), Linux (emitido por curso em vídeo).
        </div>
      </div>

      {/* experiencia e formacao */}
      <div className="flex flex-col md:flex-row transition-all gap-3 *:flex-1 *:backdrop-brightness-150 *:bg-zinc-500 *:bg-opacity-15 *:backdrop-blur-md *:rounded-xl *:p-2">
        <div className="flex flex-col">
          <p className="text-2xl font-bold mb-5">
            <div>Experiencia</div>
          </p>
          <div className="flex-1 flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-2 my-5">
              <Frown size={30} />
              Sem experiencia profissional
            </div>
          </div>
        </div>
        <div>
          <p className="mb-5 flex items-center justify-between">
            <div className="text-2xl font-bold ">Formações / Certificações</div>
            <NavLink
              to={"certificates"}
              className={"hover:underline flex items-center space-x-2 group"}
            >
              <p className="opacity-0 group-hover:opacity-100 transition-all translate-x-[100%] group-hover:translate-x-0">
                See all
              </p>
              <Eye className="" />
            </NavLink>
          </p>
          <div className="space-y-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <div className="flex gap-3 items-center">
                    <Book />
                    Engenharia de software
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:flex *:items-center *:gap-2 space-y-2">
                    <div className="font-bold text-[1.2rem]">
                      Graduação em Engenharia de software
                    </div>
                    <div>Local: UNICEPLAC - Gama, DF</div>
                    <p>Status: Cursando</p>
                    <div>
                      Inicio: Jan/2021
                      <Separator orientation="vertical" />
                      Terminio: Dez/2024
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <div className="flex gap-3 items-center">
                    <StickyNote />
                    Scrum
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:flex *:items-center *:gap-2 space-y-2">
                    <div className="font-bold text-[1.2rem]">
                      Certificação em fundamentos Scrum
                    </div>
                    <div>Local: ScrumStudy</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <div className="flex gap-3 items-center">
                    <StickyNote />
                    Bootcamp em backend Java
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:flex *:items-center *:gap-2 space-y-2">
                    <div className="font-bold text-[1.2rem]">
                      Bootcamp em backend Java
                    </div>
                    <div>Local: ScrumStudy</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <div className="flex gap-3 items-center">
                    <StickyNote />
                    Java
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:flex *:items-center *:gap-2 space-y-2">
                    <div className="font-bold text-[1.2rem]">Backend Java</div>
                    <div>Local: Rocketseat</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* projetos */}
      <div className="backdrop-brightness-150 bg-zinc-500 bg-opacity-15 backdrop-blur-md rounded-xl text-justify p-2">
        <div className="mb-5 flex justify-between">
          <h1 className="text-2xl font-bold ">Projetos</h1>
          <NavLink
            to={"portifolio"}
            className={"hover:underline flex items-center space-x-2 group"}
          >
            <p className="md:opacity-0 group-hover:opacity-100 transition-all md:translate-x-[100%] group-hover:translate-x-0">
              See all
            </p>
            <Eye className="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
