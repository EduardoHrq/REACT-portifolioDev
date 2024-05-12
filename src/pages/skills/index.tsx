import { SkillsIcons } from "@/components/skillsIcons";

export function Skills() {
  return (
    <>
      <div className="space-y-20 pb-10 ">
        {/* languages */}
        <div>
          <div className="mb-7 text-2xl font-bold sticky top-0 bg-zinc-950 z-40">
            Languages
          </div>
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-10 *:cursor-default px-2">
            <SkillsIcons name="java" star />
            <SkillsIcons name="javascript" />
            <SkillsIcons name="typescript" />
            <SkillsIcons name="kotlin" />
          </div>
        </div>

        {/* backend */}
        <div>
          <div className="mb-7 text-2xl font-bold sticky top-0 bg-zinc-950 z-40">
            Back-end
          </div>
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-10 px-2 *:cursor-default">
            <SkillsIcons name="spring" star />
            <SkillsIcons name="nodejs" />
            <SkillsIcons name="maven" />
            <SkillsIcons name="npm" />
            <SkillsIcons name="prisma" />
            <SkillsIcons name="mysql" />
            <SkillsIcons name="mongo" />
            <SkillsIcons name="redis" />
            <SkillsIcons name="postman" />
            <SkillsIcons name="postgres" />
            <SkillsIcons name="docker" />
            <SkillsIcons name="hibernate" />
            <SkillsIcons name="rabbitmq" />
            <SkillsIcons
              name="JWT"
              link="https://user-images.githubusercontent.com/5418178/177059352-fe91dcd5-e17b-4103-88ae-70d6d396cf85.png"
            />
            <SkillsIcons
              name="mariaDb"
              link="https://www.svgrepo.com/show/354039/mariadb.svg"
            />
            <SkillsIcons
              name="lombok"
              link="https://avatars.githubusercontent.com/u/45949248?s=280&v=4"
            />
            <SkillsIcons name="vercel" />
          </div>
        </div>

        {/* frontend */}
        <div>
          <div className="mb-7 text-2xl font-bold sticky top-0 bg-zinc-950 z-40">
            Front-end
          </div>
          <div className=" grid grid-cols-3 md:flex md:flex-wrap gap-10 *:cursor-default px-2">
            <SkillsIcons name="react" />
            <SkillsIcons name="vite" />
            <SkillsIcons name="styledcomponents" />
            <SkillsIcons name="tailwind" />
            <SkillsIcons name="html" />
            <SkillsIcons name="css" />
            <SkillsIcons
              name="shadcn"
              link="https://avatars.githubusercontent.com/u/139895814?s=280&v=4"
            />
            <SkillsIcons
              name="Lucide"
              link="https://avatars.githubusercontent.com/u/66879934?s=280&v=4"
            />
            <SkillsIcons
              name="phosphor"
              link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSYKvijzkWDX7jpDtUHvwcAcQ2_IQX7HQ78nuAFzuQQ&s"
            />
            <SkillsIcons name="next" />
          </div>
        </div>

        {/* OS */}
        <div>
          <div className="mb-7 text-2xl font-bold sticky top-0 bg-zinc-950 z-40">
            OS - Operational System
          </div>
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-10 *:cursor-default px-2">
            <SkillsIcons name="apple" star />
            <SkillsIcons name="linux" />
            <SkillsIcons name="windows" />
          </div>
        </div>

        {/* IDE */}
        <div>
          <div className="mb-7 text-2xl font-bold sticky top-0 bg-zinc-950 z-40">
            IDE's
          </div>
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-10 *:cursor-default px-2">
            <SkillsIcons name="vscode" />
            <SkillsIcons name="idea" />
          </div>
        </div>

        {/* Version Controll */}
        <div>
          <div className="mb-7 text-2xl font-bold sticky top-0 bg-zinc-950 z-40">
            Version Controll
          </div>
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-10 *:cursor-default px-2">
            <SkillsIcons name="git" />
            <SkillsIcons name="github" />
            <SkillsIcons name="gitlab" />
            <SkillsIcons name="bitbucket" />
          </div>
        </div>

        {/* Process and project management */}
        <div>
          <div className="mb-7 text-2xl font-bold sticky top-0 bg-zinc-950 z-40">
            Process and project management
          </div>
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-10 *:cursor-default px-2">
            <SkillsIcons
              name="Scrum"
              link="https://images.credly.com/images/db768524-81d9-435e-96fc-33b517e15616/blob.png"
            />
            <SkillsIcons
              name="Kanban"
              link="https://as2.ftcdn.net/v2/jpg/04/56/40/55/1000_F_456405503_wLfwLDm34PPp4ZNw7XjJYWmlfJ7JCfCt.jpg"
            />
            <SkillsIcons
              name="jira"
              link="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
            />
            <SkillsIcons
              name="trello"
              link="https://cdn.icon-icons.com/icons2/3041/PNG/512/trello_logo_icon_189227.png"
            />
            <SkillsIcons
              name="ISO"
              link="https://blog.ifope.com.br/wp-content/uploads/2020/02/normas-iso.png"
            />
            <SkillsIcons name="notion" />
          </div>
        </div>
      </div>
    </>
  );
}
