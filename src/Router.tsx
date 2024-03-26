import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { Initial } from "./pages/initial";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Initial />} />
      </Route>
    </Routes>
  );
}
