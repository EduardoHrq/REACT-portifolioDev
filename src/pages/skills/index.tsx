import { Badge } from "@/components/ui/badge";
import { ListContainer } from "./styles";

export function Skills() {
  return (
    <>
      <div>
        <div className="mb-5 text-2xl font-bold">Back-end</div>
        <ListContainer className=" *:text-[1rem] *:px-4 *:py-2 *:flex *:gap-3 *:w-fit">
          <Badge variant={"outline"}>
            <img src="https://skillicons.dev/icons?i=java" alt="java" />
            Java
          </Badge>
          <Badge variant={"outline"}>
            <img src="https://skillicons.dev/icons?i=js" alt="js" />
            JavaScript
          </Badge>
          <Badge variant={"outline"}>
            <img src="https://skillicons.dev/icons?i=js" alt="js" />
            JavaScript
          </Badge>
          <Badge variant={"outline"}>
            <img src="https://skillicons.dev/icons?i=js" alt="js" />
            JavaScript
          </Badge>
          <Badge variant={"outline"}>
            <img src="https://skillicons.dev/icons?i=js" alt="js" />
            JavaScript
          </Badge>
          <Badge variant={"outline"}>
            <img src="https://skillicons.dev/icons?i=js" alt="js" />
            JavaScript
          </Badge>
          <Badge variant={"outline"}>
            <img src="https://skillicons.dev/icons?i=js" alt="js" />
            JavaScript
          </Badge>
        </ListContainer>
      </div>
    </>
  );
}
