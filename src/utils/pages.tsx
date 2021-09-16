import Notes from "view/pages/Notes/Notes";
import Dashboard from "view/pages/Dashboard/Dashboard";

interface websiteItem {
  View: React.FC<any>;
  path: string;
  menuPath?: string;
  name: string;
}

const pages: websiteItem[] = [
  { View: Dashboard, path: "/dashboard/:id?", menuPath: "/dashboard", name: "dashboard" },
  { View: Notes, path: "/notes", name: "notes" },
];

//Login page must be last element for pages array

export default pages;
