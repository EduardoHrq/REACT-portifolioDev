import { Side } from "@/components/side";
import { ContentContainer, Layout } from "./styles";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <Layout className="dark:bg-zinc-950 bg-zinc-500 dark:text-zinc-50">
      <Side />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Layout>
  );
}
  