import React, { ReactNode } from "react";
import AsideMenu from "../AsideMenu/AsideMenu";
import Background from "../Background/Background";
import TailHeader from "../TailHeader/TailHeader";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <> 
      <AsideMenu />
      <TailHeader />
      <Background />
      <main>{children}</main>
    </>
  );
};

export default Layout;
