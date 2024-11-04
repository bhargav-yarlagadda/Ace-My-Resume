import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen bg-black/90  min-h-screen" >
    <Header/>
      {children}
    </div>
  );
};

export default Layout;
