import { SelectIcon } from "@/components/badge";
import { ProjectContainer } from "@/components/projectLayout";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import axios from "axios";
import { Grid } from "lucide-react";
import { useEffect, useState } from "react";

interface projectProps {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  masterTecs: [string];
  image: string;
  status: string;
  gitRepo: string;
  demo: string;
}

export function Portifolio() {
  const [projects, setProjects] = useState<projectProps[]>();
  const [techs, setTechs] = useState<string[]>();

  useEffect(() => {
    axios("projects.json", {
      headers: {
        Accept: "application/json",
      },
    }).then(res => {
      setProjects(res.data.projects);
      setTechs(res.data.filter);
    });
  }, []);

  return (
    <>
      <ScrollArea className="w-[90lvw] md:w-[960px]">
        <div className="flex gap-5 w-max px-4 py-3 items-center">
          <div key={"all"} className="flex items-center px-4 py-2 gap-2 bg-zinc-500 bg-opacity-50 rounded-full">
            <Grid size={30} className="fill-zinc-100 text-zinc-700" />
            All
          </div>
          {techs?.map((value, index) => {
            return (
              <SelectIcon name={value} key={value.concat(index.toString())} />
            );
          })}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex flex-col p-2 space-y-10">
        {projects?.map((value) => {
          // if (index % 2) {
          //   return (
          //     <ProjectContainer
          //       key={value.id}
          //       title={value.title}
          //       shortDesc={value.shortDesc}
          //       description={value.description}
          //       demo={value.demo}
          //       gitRepo={value.gitRepo}
          //       image={value.image}
          //       masterTecs={value.masterTecs}
          //       status={value.status}
          //       reversed
          //     />
          //   );
          // }
          return (
            <ProjectContainer
              key={value.id}
              title={value.title}
              shortDesc={value.shortDesc}
              description={value.description}
              demo={value.demo}
              gitRepo={value.gitRepo}
              image={value.image}
              masterTecs={value.masterTecs}
              status={value.status}
            />
          );
        })}
      </div>
    </>
  );
}
