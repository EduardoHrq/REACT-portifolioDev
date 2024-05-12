import { Laugh, Linkedin, Mail, Users } from "lucide-react";
import {
  WhatsappLogo,
  Phone,
  VideoCamera,
  DotsThreeOutlineVertical,
  PaperPlaneRight,
  GithubLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";

export function Contacts() {
  return (
    <>
      <div className="space-y-5">
        <h1 className="mt-5 text-[2rem] font-bold">Social</h1>
        <div className="grid md:grid-cols-2  gap-7 space-y-10">
          <a className="*:text-zinc-200 cursor-pointer mt-10" target="_blank" href="https://linkedin.com/in/eduardohrq">
            <div
              className="min-h-[300px] flex flex-col items-center gap-6 bg-blue-700 px-5 py-7
            rounded-xl relative group"
            >
              <div
                className="hidden md:block absolute inset-1 bg-blue-700 z-20 bg-opacity-50 backdrop-blur-sm 
              backdrop-saturate-50 opacity-0 group-hover:opacity-100 group-hover:delay-100 
              transition-all scale-[.2] group-hover:scale-100 duration-500 rounded-xl 
              overflow-hidden origin-top"
              ></div>
              <div
                className="bg-blue-950 p-3 rounded-xl absolute -top-[2rem] ring-4 ring-blue-700 
              z-20 md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 transition-all md:group-hover:delay-100
              duration-300"
              >
                <Linkedin size={40} className="fill-zinc-100 text-zinc-100 " />
                <div
                  className="text-[1.5rem] flex items-center gap-2 absolute w-max -translate-x-1/2
                opacity-0 left-1/2 -bottom-10 group-hover:opacity-100 transition-all group-hover:delay-200"
                >
                  <div>Ir ao Linkedin</div>
                  <ArrowUpRight weight="bold" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <img
                    src="https://i.imgur.com/qmVWOlh.jpg"
                    alt=""
                    className="absolute rounded-full top-7"
                    width={70}
                  />
                  <img
                    src="https://media.licdn.com/dms/image/D4D16AQFrmohLm9z3cQ/profile-displaybackgroundimage-shrink_350_1400/0/1698153878104?e=1720656000&v=beta&t=OmZQUeoiGZcChikZhOjPLMOzQMjw6suHhvKt2nkIfKQ"
                    alt=""
                    className="w-full rounded"
                  />
                </div>
                <span className="font-bold tracking-wide w-full mt-4">
                  EduardoHrq
                </span>
                <span className="w-full flex gap-3 opacity-75">
                  <Users />
                  150 conexões
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">Conecte-se comigo!</span>
                <span className="">Envie uma mensagem pelo LinkedIn</span>
              </div>
            </div>
          </a>

          <a className="*:text-zinc-200 cursor-pointer" target="_blank" href="https://wa.me/61999115197">
            <div
              className="md:h-full min-h-[300px] flex flex-col items-center bg-green-700 px-5 py-7
            rounded-xl relative group"
            >
              <div
                className="hidden md:block absolute inset-1 bg-green-700 z-20 bg-opacity-50 backdrop-blur-sm 
              backdrop-saturate-50 opacity-0 group-hover:opacity-100 group-hover:delay-100 
              transition-all scale-[.2] group-hover:scale-100 duration-500 rounded-xl 
              overflow-hidden origin-top"
              ></div>
              <div
                className="bg-green-950 p-3 rounded-xl absolute -top-[2rem] ring-4 ring-green-700 
              z-20 md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 md:group-hover:delay-100 transition-all
              duration-300"
              >
                <WhatsappLogo
                  size={40}
                  className="fill-zinc-100 text-zinc-100"
                />
                <div
                  className="text-[1.5rem] flex items-center gap-2 absolute w-max -translate-x-1/2
                opacity-0 left-1/2 -bottom-10 group-hover:opacity-100 transition-all group-hover:delay-200"
                >
                  <div>Abrir whatsapp</div>
                  <ArrowUpRight weight="bold" />
                </div>
              </div>

              <div className="w-full bg-green-950 p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://i.imgur.com/qmVWOlh.jpg"
                    alt=""
                    className="rounded-full"
                    width={40}
                  />
                  <span>(61) 9 9911-5197</span>
                </div>
                <div className="flex items-center gap-2">
                  <VideoCamera size={25} weight="fill" />
                  <Phone size={25} weight="fill" />
                  <DotsThreeOutlineVertical size={25} weight="fill" />
                </div>
              </div>
              <div
                className="bg-red-500 w-full flex-1 flex items-end p-1
              bg-[url('https://i.pinimg.com/564x/62/40/b6/6240b66d5c50c8661eee78b439a7d33c.jpg')]"
              >
                <div className="w-full flex items-center gap-1">
                  <div className="flex-1 bg-zinc-100 p-2 rounded-full flex items-center gap-2">
                    <Laugh className="text-zinc-600" />
                    <span className="text-zinc-900">
                      Envie uma mensagem pelo Whatsapp
                    </span>
                  </div>
                  <div className="bg-green-500 w-max p-3 rounded-full">
                    <PaperPlaneRight size={25} />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a className="*:text-zinc-200 cursor-pointer mt-10" target="_blank" href="https://github.com/eduardohrq">
            <div
              className="min-h-[300px] flex flex-col items-center justify-between gap-6 bg-zinc-300 px-5 py-7
            rounded-xl relative group"
            >
              <div
                className="hidden md:block absolute inset-1 bg-zinc-500 z-20 bg-opacity-50 backdrop-blur-sm 
              backdrop-saturate-50 opacity-0 group-hover:opacity-100 group-hover:delay-100 
              transition-all scale-[.2] group-hover:scale-100 duration-500 rounded-xl 
              overflow-hidden origin-top"
              ></div>
              <div
                className="bg-zinc-300 p-3 rounded-xl absolute -top-[2rem] ring-4 ring-zinc-300 
              z-20 md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 transition-all md:group-hover:delay-100
              duration-300"
              >
                <GithubLogo size={40} weight="fill" color="#000" />
                <div
                  className="text-[1.5rem] flex items-center gap-2 absolute w-max -translate-x-1/2
                opacity-0 left-1/2 -bottom-10 group-hover:opacity-100 transition-all group-hover:delay-200"
                >
                  <div>Ir ao Github</div>
                  <ArrowUpRight weight="bold" />
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <div className="w-full flex gap-2">
                  <div className="flex flex-col gap-3">
                    <img
                      src="https://i.imgur.com/qmVWOlh.jpg"
                      alt=""
                      className="size-[100px] rounded-full"
                    />
                    <span className="font-bold tracking-wide w-full text-zinc-800">
                      EduardoHrq
                    </span>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-3">
                    <div className="w-full rounded ring-2 ring-zinc-700 flex flex-col gap-2 p-2">
                      <div className="w-full h-4 rounded-full bg-zinc-700"></div>
                      <div className="w-1/2 h-2 rounded-full bg-zinc-700"></div>
                      <div className="w-full h-2 rounded-full bg-zinc-700"></div>
                    </div>
                    <div className="w-full rounded ring-2 ring-zinc-700 flex flex-col gap-2 p-2">
                      <div className="w-full h-4 rounded-full bg-zinc-700"></div>
                      <div className="w-1/2 h-2 rounded-full bg-zinc-700"></div>
                      <div className="w-full h-2 rounded-full bg-zinc-700"></div>
                    </div>
                    <div className="w-full rounded ring-2 ring-zinc-700 flex flex-col gap-2 p-2">
                      <div className="w-full h-4 rounded-full bg-zinc-700"></div>
                      <div className="w-1/2 h-2 rounded-full bg-zinc-700"></div>
                      <div className="w-full h-2 rounded-full bg-zinc-700"></div>
                    </div>
                    <div className="w-full rounded ring-2 ring-zinc-700 flex flex-col gap-2 p-2">
                      <div className="w-full h-4 rounded-full bg-zinc-700"></div>
                      <div className="w-1/2 h-2 rounded-full bg-zinc-700"></div>
                      <div className="w-full h-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center text-zinc-900">
                <span className="font-bold">Me siga!</span>
                <span className="">Veja meus projetos e repositorios</span>
              </div>
            </div>
          </a>

          <a className="*:text-zinc-200 cursor-pointer" target="_blank" href="mailto:eduardohrq.silva06@gmail.com">
            <div
              className="md:h-full min-h-[300px] flex flex-col items-center bg-amber-700 px-5 py-7
            rounded-xl relative group"
            >
              <div
                className="hidden md:block absolute inset-1 bg-amber-700 z-20 bg-opacity-50 backdrop-blur-sm 
              backdrop-saturate-50 opacity-0 group-hover:opacity-100 group-hover:delay-100 
              transition-all scale-[.2] group-hover:scale-100 duration-500 rounded-xl 
              overflow-hidden origin-top"
              ></div>
              <div
                className="bg-amber-950 p-3 rounded-xl absolute -top-[2rem] ring-4 ring-amber-700 
              z-20 md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 md:group-hover:delay-100 transition-all
              duration-300"
              >
                <Mail size={40} className="text-zinc-100" />
                <div
                  className="text-[1.5rem] flex items-center gap-2 absolute w-max -translate-x-1/2
                opacity-0 left-1/2 -bottom-10 group-hover:opacity-100 transition-all group-hover:delay-200"
                >
                  <div>Copiar E-mail</div>
                  <ArrowUpRight weight="bold" />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl w-full flex-1 cursor-default">
                <div className="w-full bg-zinc-950 px-2 py-4 flex items-center gap-3 border-b">
                  <div className="font-bold opacity-70">Para: </div>
                  <div>eduardohrq.silva06@gmail.com</div>
                </div>
                <div className="w-full bg-zinc-950 px-2 py-4 flex items-center gap-3 border-b">
                  <div className="font-bold opacity-70">Assunto: </div>
                  <div>-</div>
                </div>
                <div className="w-full h-full bg-zinc-950 p-2">body</div>
              </div>
              <div className="bg-zinc-300 text-zinc-900 w-full py-3 text-center rounded-xl">
                Enviar
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
