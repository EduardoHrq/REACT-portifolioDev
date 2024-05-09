import { SkillsIcons } from "../skillsIcons";

interface badge {
  name: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectIcon({ name, setFilter }: badge) {
  return (
    <label
      className="flex gap-2 bg-zinc-500 bg-opacity-50 px-4 py-2 items-center rounded-full 
    md:hover:px-10 transition-all cursor-pointer has-[:checked]:bg-sky-700 has-[:checked]:hover:px-4 
    has-[:checked]:ring-2 has-[:checked]:ring-zinc-200 "
    >
      <input
        type="radio"
        name="filter"
        onChange={(event) => {
          event.preventDefault;
          setFilter(name);
        }}
        hidden
      />
      <SkillsIcons name={name} icon size={30} />
      {name}
    </label>
  );
}
