import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
