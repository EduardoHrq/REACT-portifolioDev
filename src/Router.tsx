import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { Initial } from "./pages/initial";
import { Skills } from "./pages/skills";
import { Portifolio } from "./pages/portifolio";
import { Certificates } from "./pages/certificates";
import { Contact } from "lucide-react";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Initial />} />
        <Route path="skills" element={<Skills />}/>
        <Route path="portifolio" element={<Portifolio />}/>
        <Route path="certificates" element={<Certificates />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
  );
}
