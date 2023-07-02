import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/app/Layouts";
import { Home, NoMatch } from "@/pages";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
