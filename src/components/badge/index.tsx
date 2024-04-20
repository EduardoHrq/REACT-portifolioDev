import { SkillsIcons } from "../skillsIcons";

interface badge {
  name: string
}

export function SelectIcon({name}: badge) {
  return (
    <div className="flex gap-2 bg-zinc-500 bg-opacity-50 px-4 py-2 items-center rounded-full">
      <SkillsIcons name={name} icon size={30} />
      {name}
    </div>
  )
}