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
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    axios("projects.json", {
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      setProjects(res.data.projects);
      setTechs(res.data.filter);
    });

    console.log(filter);
  }, [filter]);

  return (
    <>
      <ScrollArea className="w-[90lvw] md:w-[900px]">
        <div className="flex gap-5 w-max px-4 py-3 items-center">
          <label
            key={"all"}
            className="flex items-center px-4 py-2 gap-2 bg-zinc-500 bg-opacity-50 rounded-full 
            md:hover:px-10 transition-all has-[:checked]:bg-sky-700 has-[:checked]:hover:px-4
            has-[:checked]:ring-2 has-[:checked]:ring-zinc-200"
          >
            <input
              type="radio"
              name="filter"
              value={"all"}
              onChange={(event) => {
                event.preventDefault;
                setFilter("all");
              }}
              hidden
              checked={filter === "all"}
            />
            <Grid size={30} className="fill-zinc-100 text-zinc-700" />
            All
          </label>
          {techs?.map((value, index) => {
            return (
              <SelectIcon
                setFilter={setFilter}
                name={value}
                key={value.concat(index.toString())}
              />
            );
          })}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex flex-col p-2 space-y-10">
        {projects?.map((value) => {
          if (filter === "all") {
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
          } else if (value.masterTecs.includes(filter)) {
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
          }
        })}
      </div>
    </>
  );
}
