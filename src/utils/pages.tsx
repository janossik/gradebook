import GradesPage from "view/pages/GradesPage/GradesPage";
import Dashboard from "view/pages/Dashboard/Dashboard";
import LoginPage from "view/pages/LoginPage/LoginPage";

interface websiteItem {
  View: React.FC<any>;
  path: string;
  menuPath?: string;
  name: string;
}

const pages: websiteItem[] = [
  { View: Dashboard, path: "/dashboard/:id?", menuPath: "/dashboard/A", name: "dashboard" },
  { View: GradesPage, path: "/grades", name: "grades" },
];

//Login page must be last element for pages array
pages.push({ View: LoginPage, path: "/", name: "log out" });

export default pages;
