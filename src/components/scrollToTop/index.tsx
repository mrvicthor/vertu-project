import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type IProps = {
  children: React.ReactNode;
};

const ScrollToTop = ({ children }: IProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
