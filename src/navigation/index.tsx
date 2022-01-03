import { Home } from "../views/Home/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NotFound } from "../views/NotFound/NotFound";

export const RootNavigator: React.FC = (): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html")!.style.scrollBehavior = "smooth";
    window.scroll({ top: 0 });
    document.querySelector("html")!.style.scrollBehavior = "auto";
  }, [location.pathname]); // triggered on route change

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
