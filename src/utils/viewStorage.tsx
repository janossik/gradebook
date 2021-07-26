import GradesPage from "view/pages/GradesPage/GradesPage";
import DesktopPage from "view/pages/HomePage/DesktopPage";
import LoginPage from "view/pages/LoginPage/LoginPage";

interface websiteItem {
  view: React.FC<any>;
  path: string;
  name: string;
}

const viewStorage: websiteItem[] = [
  { view: DesktopPage, path: "/desktop", name: "desktop" },
  { view: GradesPage, path: "/grades", name: "grades" },
];

//Login page must be last element for pages array
viewStorage.push({ view: LoginPage, path: "/", name: "log out" });

export default viewStorage;
