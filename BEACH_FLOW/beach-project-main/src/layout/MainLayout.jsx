import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100 dashboard-shell">
      <AppNavbar onToggleSidebar={handleToggleSidebar} />
      <div className="d-flex flex-grow-1 position-relative dashboard-main-wrap">
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        <main className="flex-grow-1 p-3 p-lg-4 content-area dashboard-content-area">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
