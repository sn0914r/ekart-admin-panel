import { useState } from "react";
import Sidebar from "@shared/layout/Sidebar";
import Topbar from "@shared/layout/Topbar";
import { LayoutShell, MainContent, PageContent } from "./MainLayout.styles";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <LayoutShell>
      <Sidebar isOpen={isSidebarOpen} />
      <MainContent>
        <Topbar toggleSidebar={toggleSidebar} />
        <PageContent>{children}</PageContent>
      </MainContent>
    </LayoutShell>
  );
};

export default Layout;
