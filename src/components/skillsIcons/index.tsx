import { Star } from "@phosphor-icons/react";

interface IconsProps {
  name: string;
  link?: string;
  star?: boolean;
  icon?: boolean;
  size?: number;
}

export function SkillsIcons(props: IconsProps) {
  const url = `https://skillicons.dev/icons?i=${props.name}`;

  if (props.icon) {
    return (
      <div className="group relative flex items-center justify-center ">
        <img
          src={props.link ? props.link : url}
          alt={props.name}
          width={props.size ? props.size : 40}
          height={props.size ? props.size : 40}
        />
      </div>
    );
  } else {
    return (
      <div className="group relative flex items-center justify-center ">
        <div className="group-hover:translate-y-[-20%] transition-all rounded-[18px] ring ring-zinc-200">
          {props.star ? (
            <Star weight="fill" className=" text-black bg-zinc-100 rounded-full p-1 size-7 absolute top-[-10px] right-[-10px] " />
          ) : null}
          <img
            src={props.link ? props.link : url}
            alt={props.name}
            width={props.size ? props.size : 75}
            height={props.size ? props.size : 75}
            className="rounded-[18px]"
          />
        </div>
        <span className="text-center capitalize absolute opacity-0 top-1/2 translate-y-[-50%] group-hover:opacity-100 group-hover:top-[110%] transition-all group-hover:delay-500">
          {props.name}
        </span>
      </div>
    );
  }
}
