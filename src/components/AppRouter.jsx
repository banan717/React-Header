import React from "react";
import { routes } from "../routes/routes";
import { Route, Routes } from "react-router-dom";
const AppRouter = () => {
  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.path} element={<el.element />} key={el.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
