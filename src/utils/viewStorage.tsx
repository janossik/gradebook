import { ReactElement } from "react";
import DesktopPage from "view/pages/HomePage/DesktopPage";
import LoginPage from "view/pages/LoginPage/LoginPage";

interface websiteItem {
  page: ReactElement<any, any>;
  path: string;
  name: string;
}

const viewStorage: websiteItem[] = [{ page: <DesktopPage />, path: "/desktop", name: "desktop" }];

//Login page must be last element for pages array
viewStorage.push({ page: <LoginPage />, path: "/", name: "log out" });

export default viewStorage;
