import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div  >
    <Header/>
      {children}
    </div>
  );
};

export default Layout;
