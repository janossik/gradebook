import GradesPage from "view/pages/GradesPage/GradesPage";
import DesktopPage from "view/pages/HomePage/DesktopPage";
import LoginPage from "view/pages/LoginPage/LoginPage";

interface websiteItem {
  View: React.FC<any>;
  path: string;
  name: string;
}

const pages: websiteItem[] = [
  { View: DesktopPage, path: "/desktop", name: "desktop" },
  { View: GradesPage, path: "/grades", name: "grades" },
];

//Login page must be last element for pages array
pages.push({ View: LoginPage, path: "/", name: "log out" });

export default pages;
