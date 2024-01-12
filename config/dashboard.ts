import {
  Home,
  Aperture,
  FolderKanban,
  PencilRuler,
  HelpCircle,
  Settings,
  LogOut,
} from "lucide-react";

export const navigation = [
  { title: "Dashboard", icon: Home, link: "/protected/dashboard" },
  { title: "Studio", icon: Aperture, link: "/protected/dashboard/studio" },
  {
    title: "Production",
    icon: FolderKanban,
    link: "/protected/dashboard/production",
  },
  {
    title: "Post-Production",
    icon: PencilRuler,
    link: "/protected/dashboard/post-production",
  },
  { title: "FAQ", icon: HelpCircle, link: "/protected/dashboard/faq" },
  { title: "Settings", icon: Settings, link: "/protected/dashboard/settings" },
  { title: "Logout", icon: LogOut, link: "/logout" },
];
