import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import User from "./pages/User/User";
import NotFound from "./pages/Not-found/Not-found";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user/:login" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
