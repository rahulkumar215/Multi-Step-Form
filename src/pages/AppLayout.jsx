import { Outlet } from "react-router-dom";
import "./AppLayout.scss";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
