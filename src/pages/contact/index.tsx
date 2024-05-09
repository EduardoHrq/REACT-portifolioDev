import { Laugh, Linkedin, Mail, Users } from "lucide-react";
import {
  WhatsappLogo,
  Phone,
  VideoCamera,
  DotsThreeOutlineVertical,
  PaperPlaneRight,
} from "@phosphor-icons/react";

export function Contacts() {
  return (
    <>
      <div className="space-y-5">
        <h1 className="mt-5 text-[2rem] font-bold">Social</h1>
        <div className="grid grid-cols-2 gap-7 space-y-10">
          <a className="*:text-zinc-200 mt-10">
            <div
              className="flex flex-col items-center gap-6 bg-blue-700 px-5 py-7
            rounded-xl relative"
            >
              <div
                className="bg-blue-950 p-3 rounded-xl absolute -top-[2rem] ring-4 ring-blue-700 
              z-40"
              >
                <Linkedin size={40} className="fill-zinc-100 text-zinc-100" />
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

          <a className="*:text-zinc-200">
            <div
              className="h-full flex flex-col items-center bg-green-700 px-5 py-7
            rounded-xl relative"
            >
              <div
                className="bg-green-950 p-3 rounded-xl absolute -top-[2rem] ring-4 ring-green-700 
              z-40"
              >
                <WhatsappLogo
                  size={40}
                  className="fill-zinc-100 text-zinc-100"
                />
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
        </div>
      </div>
    </>
  );
}
